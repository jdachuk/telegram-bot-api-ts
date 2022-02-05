import { BotCommand } from "./types/bot_command";
import { Chat } from "./types/chat";
import { ChatInviteLink } from "./types/chat_invite_link";
import { ChatMember } from "./types/chat_member";
import { File } from "./types/file";
import { GameHighScore } from './types/game_high_score';
import { Message, MessageId } from "./types/message";
import { MethodParams } from "./method_params";
import { Poll } from "./types/poll";
import { StickerSet } from "./types/sticker_set";
import { TelegramResponse } from "./types/telegram_response";
import { Update } from "./types/update";
import { User } from "./types/user";
import { UserProfilePhotos } from "./types/user_profile_photos";
import { WebhookInfo } from "./types/webhook_info";

import * as FormData from "form-data";
import * as fs from "fs";
import * as path from "path";
import * as qs from "qs";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type RequestOptions<T = any> = {
  query_string?: T;
  form_data?: FormData;
};

type Keys<P> = keyof {[Property in keyof P as Property extends string ? Property : never]: string[]};
type MakeRequired<T, K extends keyof T> = Omit<T, K> | Required<Pick<T, K>>;

function format_file_data(file_path: string, form_data: FormData) {
  if (fs.existsSync(file_path)) {
    const file_name = path.basename(file_path, path.extname(file_path));

    form_data.append(file_name, fs.createReadStream(file_path));
    return `attach://${file_name}`;
  } else {
    throw new Error(`File ${file_path} not found!`);
  }
}

function translate_to_qs<P>(params: P): RequestOptions {
  if (typeof params === "undefined") return {};
  return { query_string: params };
}

function serialize_options<P>(options: RequestOptions, params_to_serialize: Keys<P>[]) {
  if (options.query_string !== undefined && params_to_serialize.length !== 0) {
    for (let param of params_to_serialize) {
      if (options.query_string[param] !== undefined) {
        options.query_string[param] = JSON.stringify(options.query_string[param]);
      }
    }
  }

  return options;
}

export class TelegramBotAPI {
  private static m_baseUrl: string = 'https://api.telegram.org'
  protected m_token: string;

  constructor(token: string) {
    this.m_token = token;
  }

  private static build_url(token: string, method_name: string, query_string?: string) {
    if (query_string && query_string.length) {
      return `${TelegramBotAPI.m_baseUrl}/bot${token}/${method_name}?${query_string}`;
    }
    return `${TelegramBotAPI.m_baseUrl}/bot${token}/${method_name}`;
  }

  private static request_decorator<R, P = undefined>(
      method: string, 
      uploads: Keys<P>[] = [], 
      serialize_params: Keys<P>[] = []
    ) : ((token: string, params?: P, options?: RequestOptions) => Promise<R>) {
    if (uploads.length === 0) {
      return (token: string, params?: P, options: RequestOptions = translate_to_qs(params)): Promise<R> => {
        return TelegramBotAPI.make_request<R>(token, method, serialize_options<P>(options, serialize_params));
      };
    }

    return (token: string, params?: P, options: RequestOptions = translate_to_qs(params)): Promise<R> => {
      const files_to_upload: { type: string; file_path: string; }[] = [];

      for (let file of (uploads as string[])) {
        if (options.query_string[file] && options.query_string[file].file_id !== undefined) {
          options.query_string[file] = options.query_string[file].file_id;
        } else if (options.query_string[file] && options.query_string[file].file_path !== undefined) {
          files_to_upload.push({ type: file, file_path: options.query_string[file].file_path });
        } else if (options.query_string[file] && options.query_string[file].file_url !== undefined) {
          options.query_string[file] = options.query_string[file].file_url;
        }
      }

      const form_data = new FormData();
      try {
        for (let form of files_to_upload) {
          options.query_string[form.type] = format_file_data(form.file_path, form_data);
        }
      } catch (err) {
        return Promise.reject(err);
      }
      options.form_data = form_data;

      return TelegramBotAPI.make_request<R>(token, method, options);
    };
  }

  private static make_request<R>(token: string, method_name: string, options: RequestOptions) : Promise<R> {
    return new Promise<R>((resolve, reject) => {
      const url: string = TelegramBotAPI.build_url(token, method_name, qs.stringify(options.query_string));
      const config: AxiosRequestConfig = {};
      let data: FormData = new FormData();

      if (options.form_data) {
        data = options.form_data;
        config.headers = options.form_data.getHeaders();
      }

      axios.post<TelegramResponse<R>>(url, data, config)
        .then((res: AxiosResponse<TelegramResponse<R>>) => {
          if (res.data.ok && res.data.result !== undefined) {
            resolve(res.data.result);
          } else {
            reject(new Error(res.data.description));
          }
        })
        .catch((err) => reject(err));
    });
  }

  private static m_getUpdates = TelegramBotAPI.request_decorator<Update[], MethodParams.GetUpdates>("getUpdates", [], ["allowed_updates"]);
  public getUpdates(params?: MethodParams.GetUpdates) : Promise<Update[]> {
    return TelegramBotAPI.m_getUpdates(this.m_token, params);
  }

  private static m_setWebhook = TelegramBotAPI.request_decorator<true, MethodParams.SetWebhook>("setWebhook", ["certificate"], ["allowed_updates"]);
  public setWebhook(params: MethodParams.SetWebhook) : Promise<true> {
    return TelegramBotAPI.m_setWebhook(this.m_token, params);
  }

  private static m_deleteWebhook = TelegramBotAPI.request_decorator<true, MethodParams.DeleteWebhook>("deleteWebhook");
  public deleteWebhook(params?: MethodParams.DeleteWebhook) : Promise<true> {
    return TelegramBotAPI.m_deleteWebhook(this.m_token, params);
  }

  private static m_getWebhookInfo = TelegramBotAPI.request_decorator<WebhookInfo>("getWebhookInfo");
  public getWebhookInfo() : Promise<WebhookInfo> {
    return TelegramBotAPI.m_getWebhookInfo(this.m_token, undefined);
  }

  private static m_getMe = TelegramBotAPI.request_decorator<User>("getMe");
  public getMe() : Promise<User> {
    return TelegramBotAPI.m_getMe(this.m_token, undefined);
  }

  private static m_logOut = TelegramBotAPI.request_decorator<true>("logOut");
  public logOut() : Promise<true> {
    return TelegramBotAPI.m_logOut(this.m_token, undefined);
  }

  private static m_close = TelegramBotAPI.request_decorator<true>("close");
  public close() : Promise<true> {
    return TelegramBotAPI.m_close(this.m_token, undefined);
  }

  private static m_sendMessage = TelegramBotAPI.request_decorator<Message, MethodParams.SendMessage>("sendMessage", [], ["entities", "reply_markup"]);
  public sendMessage(params: MethodParams.SendMessage) : Promise<Message> {
    if (params.text.length === 0) {
      return Promise.reject(new Error("Message text must not be empty!"));
    }

    return TelegramBotAPI.m_sendMessage(this.m_token, params);
  }

  private static m_forwardMessage = TelegramBotAPI.request_decorator<Message, MethodParams.ForwardMessage>("forwardMessage");
  public forwardMessage(params: MethodParams.ForwardMessage) : Promise<Message> {
    return TelegramBotAPI.m_forwardMessage(this.m_token, params);
  }

  private static m_copyMessage = TelegramBotAPI.request_decorator<MessageId, MethodParams.CopyMessage>("copyMessage", [], ["caption_entities", "reply_markup"]);
  public copyMessage(params: MethodParams.CopyMessage) : Promise<MessageId> {
    return TelegramBotAPI.m_copyMessage(this.m_token, params);
  }

  private static m_sendPhoto = TelegramBotAPI.request_decorator<Message, MethodParams.SendPhoto>("sendPhoto", ["photo"], ["caption_entities", "reply_markup"]);
  public sendPhoto(params: MethodParams.SendPhoto) : Promise<Message> {
    return TelegramBotAPI.m_sendPhoto(this.m_token, params);
  }

  private static m_sendAudio = TelegramBotAPI.request_decorator<Message, MethodParams.SendAudio>("sendAudio", ["audio", "thumb"], ["caption_entities", "reply_markup"]);
  public sendAudio(params: MethodParams.SendAudio) : Promise<Message> {
    return TelegramBotAPI.m_sendAudio(this.m_token, params);
  }

  private static m_sendDocument = TelegramBotAPI.request_decorator<Message, MethodParams.SendDocument>("sendDocument", ["document", "thumb"], ["caption_entities", "reply_markup"]);
  public sendDocument(params: MethodParams.SendDocument) : Promise<Message> {
    return TelegramBotAPI.m_sendDocument(this.m_token, params);
  }

  private static m_sendVideo = TelegramBotAPI.request_decorator<Message, MethodParams.SendVideo>("sendVideo", ["video", "thumb"], ["caption_entities", "reply_markup"]);
  public sendVideo(params: MethodParams.SendVideo) : Promise<Message> {
    return TelegramBotAPI.m_sendVideo(this.m_token, params);
  }

  private static m_sendAnimation = TelegramBotAPI.request_decorator<Message, MethodParams.SendAnimation>("sendAnimation", ["animation", "thumb"], ["caption_entities", "reply_markup"]);
  public sendAnimation(params: MethodParams.SendAnimation) : Promise<Message> {
    return TelegramBotAPI.m_sendAnimation(this.m_token, params);
  }

  private static m_sendVoice = TelegramBotAPI.request_decorator<Message, MethodParams.SendVoice>("sendVoice", ["voice"], ["caption_entities", "reply_markup"]);
  public sendVoice(params: MethodParams.SendVoice) : Promise<Message> {
    return TelegramBotAPI.m_sendVoice(this.m_token, params);
  }

  private static m_sendVideoNote = TelegramBotAPI.request_decorator<Message, MethodParams.SendVideoNote>("sendVideoNote", ["video_note", "thumb"], ["reply_markup"]);
  public sendVideoNote(params: MethodParams.SendVideoNote) : Promise<Message> {
    return TelegramBotAPI.m_sendVideoNote(this.m_token, params);
  }

  private static m_sendMediaGroup = TelegramBotAPI.request_decorator<Message[], MethodParams.SendMediaGroup>("sendMediaGroup", [], ["media"]);
  public sendMediaGroup(params: MethodParams.SendMediaGroup) : Promise<Message[]> {
    if (params.media.length < 2 || params.media.length > 10) {
      return Promise.reject(new Error("Parameter 'media' must include from 2 to 10 items!"));
    }

    const options: RequestOptions = translate_to_qs(params);
    const form_data: FormData = new FormData();

    try {
      for (let i = 0; i < params.media.length; i++) {
        const media = params.media[i];
  
        if ((media.media as { file_id: string }).file_id !== undefined) {
          options.query_string.media[i].media = (media.media as { file_id: string }).file_id;
        } else if ((media.media as { file_path: string }).file_path !== undefined) {
          const file_path = (media.media as { file_path: string }).file_path;
  
          options.query_string.media[i].media = format_file_data(file_path, form_data);
        } else {
          options.query_string.media[i].media = (media.media as { file_url: string }).file_url;
        }
  
        if (media.type !== "photo" && media.thumb !== undefined) {
          const file_path = media.thumb.file_path;
  
          options.query_string.media[i].thumb = format_file_data(file_path, form_data);
        }
      }
      options.form_data = form_data;
    } catch (err) {
      return Promise.reject(err);
    }

    return TelegramBotAPI.m_sendMediaGroup(this.m_token, params, options);
  }

  private static m_sendLocation = TelegramBotAPI.request_decorator<Message, MethodParams.SendLocation>("sendLocation", [], ["reply_markup"]);
  public sendLocation(params: MethodParams.SendLocation) : Promise<Message> {
    return TelegramBotAPI.m_sendLocation(this.m_token, params);
  }

  private static m_editMessageLiveLocation = TelegramBotAPI.request_decorator<Message, MethodParams.EditMessageLiveLocation>("editMessageLiveLocation", [], ["reply_markup"]);
  public editMessageLiveLocation(params: MakeRequired<Omit<MethodParams.EditMessageLiveLocation, "inline_message_id">, "chat_id" | "message_id">) : Promise<Message>;
  public editMessageLiveLocation(params: MakeRequired<Omit<MethodParams.EditMessageLiveLocation, "chat_id" | "message_id">, "inline_message_id">) : Promise<Message>;
  public editMessageLiveLocation(params: MethodParams.EditMessageLiveLocation) : Promise<Message> {
    return TelegramBotAPI.m_editMessageLiveLocation(this.m_token, params);
  }

  private static m_stopMessageLiveLocation = TelegramBotAPI.request_decorator<Message, MethodParams.StopMessageLiveLocation>("stopMessageLiveLocation", [], ["reply_markup"]);
  public stopMessageLiveLocation(params: MakeRequired<Omit<MethodParams.StopMessageLiveLocation, "inline_message_id">, "chat_id" | "message_id">) : Promise<Message>;
  public stopMessageLiveLocation(params: MakeRequired<Omit<MethodParams.StopMessageLiveLocation, "chat_id" | "message_id">, "inline_message_id">) : Promise<Message>;
  public stopMessageLiveLocation(params?: MethodParams.StopMessageLiveLocation) : Promise<Message> {
    return TelegramBotAPI.m_stopMessageLiveLocation(this.m_token, params);
  }

  private static m_sendVenue = TelegramBotAPI.request_decorator<Message, MethodParams.SendVenue>("sendVenue", [], ["reply_markup"]);
  public sendVenue(params: MethodParams.SendVenue) : Promise<Message> {
    return TelegramBotAPI.m_sendVenue(this.m_token, params);
  }

  private static m_sendContact = TelegramBotAPI.request_decorator<Message, MethodParams.SendContact>("sendContact", [], ["reply_markup"]);
  public sendContact(params: MethodParams.SendContact) : Promise<Message> {
    return TelegramBotAPI.m_sendContact(this.m_token, params);
  }

  private static m_sendPoll = TelegramBotAPI.request_decorator<Message, MethodParams.SendPoll>("sendPoll", [], ["options", "explanation_entities", "reply_markup"]);
  public sendPoll(params: MethodParams.SendPoll) : Promise<Message> {
    return TelegramBotAPI.m_sendPoll(this.m_token, params);
  }

  private static m_sendDice = TelegramBotAPI.request_decorator<Message, MethodParams.SendDice>("sendDice", [], ["reply_markup"]);
  public sendDice(params: MethodParams.SendDice) : Promise<Message> {
    return TelegramBotAPI.m_sendDice(this.m_token, params);
  }

  private static m_sendChatAction = TelegramBotAPI.request_decorator<true, MethodParams.SendChatAction>("sendChatAction");
  public sendChatAction(params: MethodParams.SendChatAction) : Promise<true> {
    return TelegramBotAPI.m_sendChatAction(this.m_token, params);
  }

  private static m_getUserProfilePhotos = TelegramBotAPI.request_decorator<UserProfilePhotos, MethodParams.GetUserProfilePhotos>("getUserProfilePhotos");
  public getUserProfilePhotos(params: MethodParams.GetUserProfilePhotos) : Promise<UserProfilePhotos> {
    return TelegramBotAPI.m_getUserProfilePhotos(this.m_token, params);
  }

  private static m_getFile = TelegramBotAPI.request_decorator<File, MethodParams.GetFile>("getFile");
  public getFile(params: MethodParams.GetFile) : Promise<File> {
    return TelegramBotAPI.m_getFile(this.m_token, params);
  }

  private static m_banChatMember = TelegramBotAPI.request_decorator<true, MethodParams.BanChatMember>("banChatMember");
  public banChatMember(params: MethodParams.BanChatMember) : Promise<true> {
    return TelegramBotAPI.m_banChatMember(this.m_token, params);
  }

  private static m_unbanChatMember = TelegramBotAPI.request_decorator<true, MethodParams.UnbanChatMember>("unbanChatMember");
  public unbanChatMember(params: MethodParams.UnbanChatMember) : Promise<true> {
    return TelegramBotAPI.m_unbanChatMember(this.m_token, params);
  }

  private static m_restrictChatMember = TelegramBotAPI.request_decorator<true, MethodParams.RestrictChatMember>("restrictChatMember", [], ["permissions"]);
  public restrictChatMember(params: MethodParams.RestrictChatMember) : Promise<true> {
    return TelegramBotAPI.m_restrictChatMember(this.m_token, params);
  }

  private static m_promoteChatMember = TelegramBotAPI.request_decorator<true, MethodParams.PromoteChatMember>("promoteChatMember");
  public promoteChatMember(params: MethodParams.PromoteChatMember) : Promise<true> {
    return TelegramBotAPI.m_promoteChatMember(this.m_token, params);
  }

  private static m_setChatAdministratorCustomTitle = TelegramBotAPI.request_decorator<true, MethodParams.SetChatAdministratorCustomTitle>("setChatAdministratorCustomTitle");
  public setChatAdministratorCustomTitle(params: MethodParams.SetChatAdministratorCustomTitle) : Promise<true> {
    return TelegramBotAPI.m_setChatAdministratorCustomTitle(this.m_token, params);
  }

  private static m_banChatSenderChat = TelegramBotAPI.request_decorator<true, MethodParams.BanChatSenderChat>("banChatSenderChat");
  public banChatSenderChat(params: MethodParams.BanChatSenderChat) : Promise<true> {
    return TelegramBotAPI.m_banChatSenderChat(this.m_token, params);
  }

  private static m_unbanChatSenderChat = TelegramBotAPI.request_decorator<true, MethodParams.UnbanChatSenderChat>("unbanChatSenderChat");
  public unbanChatSenderChat(params: MethodParams.UnbanChatSenderChat) : Promise<true> {
    return TelegramBotAPI.m_unbanChatSenderChat(this.m_token, params);
  }

  private static m_setChatPermissions = TelegramBotAPI.request_decorator<true, MethodParams.SetChatPermissions>("setChatPermissions", [], ["permissions"]);
  public setChatPermissions(params: MethodParams.SetChatPermissions) : Promise<true> {
    return TelegramBotAPI.m_setChatPermissions(this.m_token, params);
  }

  private static m_exportChatInviteLink = TelegramBotAPI.request_decorator<string, MethodParams.ExportChatInviteLink>("exportChatInviteLink");
  public exportChatInviteLink(params: MethodParams.ExportChatInviteLink) : Promise<string> {
    return TelegramBotAPI.m_exportChatInviteLink(this.m_token, params);
  }

  private static m_createChatInviteLink = TelegramBotAPI.request_decorator<ChatInviteLink, MethodParams.CreateChatInviteLink>("createChatInviteLink");
  public createChatInviteLink(params: MethodParams.CreateChatInviteLink) : Promise<ChatInviteLink> {
    return TelegramBotAPI.m_createChatInviteLink(this.m_token, params);
  }

  private static m_editChatInviteLink = TelegramBotAPI.request_decorator<ChatInviteLink, MethodParams.EditChatInviteLink>("editChatInviteLink");
  public editChatInviteLink(params: MethodParams.EditChatInviteLink) : Promise<ChatInviteLink> {
    return TelegramBotAPI.m_editChatInviteLink(this.m_token, params);
  }

  private static m_revokeChatInviteLink = TelegramBotAPI.request_decorator<ChatInviteLink, MethodParams.RevokeChatInviteLink>("revokeChatInviteLink");
  public revokeChatInviteLink(params: MethodParams.RevokeChatInviteLink) : Promise<ChatInviteLink> {
    return TelegramBotAPI.m_revokeChatInviteLink(this.m_token, params);
  }

  private static m_approveChatJoinRequest = TelegramBotAPI.request_decorator<true, MethodParams.ApproveChatJoinRequest>("approveChatJoinRequest");
  public approveChatJoinRequest(params: MethodParams.ApproveChatJoinRequest) : Promise<true> {
    return TelegramBotAPI.m_approveChatJoinRequest(this.m_token, params);
  }

  private static m_declineChatJoinRequest = TelegramBotAPI.request_decorator<true, MethodParams.DeclineChatJoinRequest>("declineChatJoinRequest");
  public declineChatJoinRequest(params: MethodParams.DeclineChatJoinRequest) : Promise<true> {
    return TelegramBotAPI.m_declineChatJoinRequest(this.m_token, params);
  }

  private static m_setChatPhoto = TelegramBotAPI.request_decorator<true, MethodParams.SetChatPhoto>("setChatPhoto", ["photo"]);
  public setChatPhoto(params: MethodParams.SetChatPhoto) : Promise<true> {
    return TelegramBotAPI.m_setChatPhoto(this.m_token, params);
  }

  private static m_deleteChatPhoto = TelegramBotAPI.request_decorator<true, MethodParams.DeleteChatPhoto>("deleteChatPhoto");
  public deleteChatPhoto(params: MethodParams.DeleteChatPhoto) : Promise<true> {
    return TelegramBotAPI.m_deleteChatPhoto(this.m_token, params);
  }

  private static m_setChatTitle = TelegramBotAPI.request_decorator<true, MethodParams.SetChatTitle>("setChatTitle");
  public setChatTitle(params: MethodParams.SetChatTitle) : Promise<true> {
    return TelegramBotAPI.m_setChatTitle(this.m_token, params);
  }

  private static m_setChatDescription = TelegramBotAPI.request_decorator<true, MethodParams.SetChatDescription>("setChatDescription");
  public setChatDescription(params: MethodParams.SetChatDescription) : Promise<true> {
    return TelegramBotAPI.m_setChatDescription(this.m_token, params);
  }

  private static m_pinChatMessage = TelegramBotAPI.request_decorator<true, MethodParams.PinChatMessage>("pinChatMessage");
  public pinChatMessage(params: MethodParams.PinChatMessage) : Promise<true> {
    return TelegramBotAPI.m_pinChatMessage(this.m_token, params);
  }

  private static m_unpinChatMessage = TelegramBotAPI.request_decorator<true, MethodParams.UnpinChatMessage>("unpinChatMessage");
  public unpinChatMessage(params: MethodParams.UnpinChatMessage) : Promise<true> {
    return TelegramBotAPI.m_unpinChatMessage(this.m_token, params);
  }

  private static m_unpinAllChatMessages = TelegramBotAPI.request_decorator<true, MethodParams.UnpinAllChatMessages>("unpinAllChatMessages");
  public unpinAllChatMessages(params: MethodParams.UnpinAllChatMessages) : Promise<true> {
    return TelegramBotAPI.m_unpinAllChatMessages(this.m_token, params);
  }

  private static m_leaveChat = TelegramBotAPI.request_decorator<true, MethodParams.LeaveChat>("leaveChat");
  public leaveChat(params: MethodParams.LeaveChat) : Promise<true> {
    return TelegramBotAPI.m_leaveChat(this.m_token, params);
  }

  private static m_getChat = TelegramBotAPI.request_decorator<Chat, MethodParams.GetChat>("getChat");
  public getChat(params: MethodParams.GetChat) : Promise<Chat> {
    return TelegramBotAPI.m_getChat(this.m_token, params);
  }

  private static m_getChatAdministrators = TelegramBotAPI.request_decorator<ChatMember[], MethodParams.GetChatAdministrators>("getChatAdministrators");
  public getChatAdministrators(params: MethodParams.GetChatAdministrators) : Promise<ChatMember[]> {
    return TelegramBotAPI.m_getChatAdministrators(this.m_token, params);
  }

  private static m_getChatMemberCount = TelegramBotAPI.request_decorator<number, MethodParams.GetChatMemberCount>("getChatMemberCount");
  public getChatMemberCount(params: MethodParams.GetChatMemberCount) : Promise<number> {
    return TelegramBotAPI.m_getChatMemberCount(this.m_token, params);
  }

  private static m_getChatMember = TelegramBotAPI.request_decorator<ChatMember, MethodParams.GetChatMember>("getChatMember");
  public getChatMember(params: MethodParams.GetChatMember) : Promise<ChatMember> {
    return TelegramBotAPI.m_getChatMember(this.m_token, params);
  }

  private static m_setChatStickerSet = TelegramBotAPI.request_decorator<true, MethodParams.SetChatStickerSet>("setChatStickerSet");
  public setChatStickerSet(params: MethodParams.SetChatStickerSet) : Promise<true> {
    return TelegramBotAPI.m_setChatStickerSet(this.m_token, params);
  }

  private static m_deleteChatStickerSet = TelegramBotAPI.request_decorator<true, MethodParams.DeleteChatStickerSet>("deleteChatStickerSet");
  public deleteChatStickerSet(params: MethodParams.DeleteChatStickerSet) : Promise<true> {
    return TelegramBotAPI.m_deleteChatStickerSet(this.m_token, params);
  }

  private static m_answerCallbackQuery = TelegramBotAPI.request_decorator<true, MethodParams.AnswerCallbackQuery>("answerCallbackQuery");
  public answerCallbackQuery(params: MethodParams.AnswerCallbackQuery) : Promise<true> {
    return TelegramBotAPI.m_answerCallbackQuery(this.m_token, params);
  }

  private static m_setMyCommands = TelegramBotAPI.request_decorator<true, MethodParams.SetMyCommands>("setMyCommands", [], ["commands", "scope"]);
  public setMyCommands(params: MethodParams.SetMyCommands) : Promise<true> {
    return TelegramBotAPI.m_setMyCommands(this.m_token, params);
  }

  private static m_deleteMyCommands = TelegramBotAPI.request_decorator<true, MethodParams.DeleteMyCommands>("deleteMyCommands", [], ["scope"]);
  public deleteMyCommands(params?: MethodParams.DeleteMyCommands) : Promise<true> {
    return TelegramBotAPI.m_deleteMyCommands(this.m_token, params);
  }

  private static m_getMyCommands = TelegramBotAPI.request_decorator<BotCommand[], MethodParams.GetMyCommands>("getMyCommands", [], ["scope"]);
  public getMyCommands(params: MethodParams.GetMyCommands) : Promise<BotCommand[]> {
    return TelegramBotAPI.m_getMyCommands(this.m_token, params);
  }

  private static m_editMessageText = TelegramBotAPI.request_decorator<true, MethodParams.EditMessageText>("editMessageText", [], ["entities", "reply_markup"]);
  public editMessageText(params: MakeRequired<Omit<MethodParams.EditMessageText, "inline_message_id">, "chat_id" | "message_id">) : Promise<true>;
  public editMessageText(params: MakeRequired<Omit<MethodParams.EditMessageText, "chat_id" | "message_id">, "inline_message_id">) : Promise<true>;
  public editMessageText(params: MethodParams.EditMessageText) : Promise<true> {
    return TelegramBotAPI.m_editMessageText(this.m_token, params);
  }

  private static m_editMessageCaption = TelegramBotAPI.request_decorator<true, MethodParams.EditMessageCaption>("editMessageCaption", [], ["caption_entities", "reply_markup"]);
  public editMessageCaption(params: MakeRequired<Omit<MethodParams.EditMessageCaption, "inline_message_id">, "chat_id" | "message_id">) : Promise<true>;
  public editMessageCaption(params: MakeRequired<Omit<MethodParams.EditMessageCaption, "chat_id" | "message_id">, "inline_message_id">) : Promise<true>;
  public editMessageCaption(params: MethodParams.EditMessageCaption) : Promise<true> {
    return TelegramBotAPI.m_editMessageCaption(this.m_token, params);
  }

  private static m_editMessageMedia = TelegramBotAPI.request_decorator<true, MethodParams.EditMessageMedia>("editMessageMedia", [], ["media", "reply_markup"]);
  public editMessageMedia(params: MakeRequired<Omit<MethodParams.EditMessageMedia, "inline_message_id">, "chat_id" | "message_id">) : Promise<true>;
  public editMessageMedia(params: MakeRequired<Omit<MethodParams.EditMessageMedia, "chat_id" | "message_id">, "inline_message_id">) : Promise<true>;
  public editMessageMedia(params: MethodParams.EditMessageMedia) : Promise<true> {
    return TelegramBotAPI.m_editMessageMedia(this.m_token, params);
  }

  private static m_editMessageReplyMarkup = TelegramBotAPI.request_decorator<true, MethodParams.EditMessageReplyMarkup>("editMessageReplyMarkup", [], ["reply_markup"]);
  public editMessageReplyMarkup(params: MakeRequired<Omit<MethodParams.EditMessageReplyMarkup, "inline_message_id">, "chat_id" | "message_id">) : Promise<true>;
  public editMessageReplyMarkup(params: MakeRequired<Omit<MethodParams.EditMessageReplyMarkup, "chat_id" | "message_id">, "inline_message_id">) : Promise<true>;
  public editMessageReplyMarkup(params: MethodParams.EditMessageReplyMarkup) : Promise<true> {
    return TelegramBotAPI.m_editMessageReplyMarkup(this.m_token, params);
  }

  private static m_stopPoll = TelegramBotAPI.request_decorator<Poll, MethodParams.StopPoll>("stopPoll", [], ["reply_markup"]);
  public stopPoll(params: MethodParams.StopPoll) : Promise<Poll> {
    return TelegramBotAPI.m_stopPoll(this.m_token, params);
  }

  private static m_deleteMessage = TelegramBotAPI.request_decorator<true, MethodParams.DeleteMessage>("deleteMessage");
  public deleteMessage(params: MethodParams.DeleteMessage) : Promise<true> {
    return TelegramBotAPI.m_deleteMessage(this.m_token, params);
  }

  private static m_sendSticker = TelegramBotAPI.request_decorator<Message, MethodParams.SendSticker>("sendSticker", ["sticker"], ["reply_markup"]);
  public sendSticker(params: MethodParams.SendSticker) : Promise<Message> {
    return TelegramBotAPI.m_sendSticker(this.m_token, params);
  }

  private static m_getStickerSet = TelegramBotAPI.request_decorator<StickerSet, MethodParams.GetStickerSet>("getStickerSet");
  public getStickerSet(params: MethodParams.GetStickerSet) : Promise<StickerSet> {
    return TelegramBotAPI.m_getStickerSet(this.m_token, params);
  }

  private static m_uploadStickerFile = TelegramBotAPI.request_decorator<File, MethodParams.UploadStickerFile>("uploadStickerFile", ["png_sticker"]);
  public uploadStickerFile(params: MethodParams.UploadStickerFile) : Promise<File> {
    return TelegramBotAPI.m_uploadStickerFile(this.m_token, params);
  }

  private static m_createNewStickerSet = TelegramBotAPI.request_decorator<true, MethodParams.CreateNewStickerSet>("createNewStickerSet", ["png_sticker", "tgs_sticker"], ["mask_position"]);
  public createNewStickerSet(params: MethodParams.CreateNewStickerSet) : Promise<true> {
    return TelegramBotAPI.m_createNewStickerSet(this.m_token, params);
  }

  private static m_addStickerToSet = TelegramBotAPI.request_decorator<true, MethodParams.AddStickerToSet>("addStickerToSet", ["png_sticker", "tgs_sticker"], ["mask_position"]);
  public addStickerToSet(params: MethodParams.AddStickerToSet) : Promise<true> {
    return TelegramBotAPI.m_addStickerToSet(this.m_token, params);
  }

  private static m_setStickerPositionInSet = TelegramBotAPI.request_decorator<true, MethodParams.SetStickerPositionInSet>("setStickerPositionInSet");
  public setStickerPositionInSet(params: MethodParams.SetStickerPositionInSet) : Promise<true> {
    return TelegramBotAPI.m_setStickerPositionInSet(this.m_token, params);
  }

  private static m_deleteStickerFromSet = TelegramBotAPI.request_decorator<true, MethodParams.DeleteStickerFromSet>("deleteStickerFromSet");
  public deleteStickerFromSet(params: MethodParams.DeleteStickerFromSet) : Promise<true> {
    return TelegramBotAPI.m_deleteStickerFromSet(this.m_token, params);
  }

  private static m_setStickerSetThumb = TelegramBotAPI.request_decorator<true, MethodParams.SetStickerSetThumb>("setStickerSetThumb", ["thumb"]);
  public setStickerSetThumb(params: MethodParams.SetStickerSetThumb) : Promise<true> {
    return TelegramBotAPI.m_setStickerSetThumb(this.m_token, params);
  }

  private static m_answerInlineQuery = TelegramBotAPI.request_decorator<true, MethodParams.AnswerInlineQuery>("answerInlineQuery", [], ["results"]);
  public answerInlineQuery(params: MethodParams.AnswerInlineQuery) : Promise<true> {
    return TelegramBotAPI.m_answerInlineQuery(this.m_token, params);
  }

  private static m_sendInvoice = TelegramBotAPI.request_decorator<Message, MethodParams.SendInvoice>("sendInvoice", [], ["prices", "suggested_tip_amounts", "provider_data", "reply_markup"]);
  public sendInvoice(params: MethodParams.SendInvoice) : Promise<Message> {
    return TelegramBotAPI.m_sendInvoice(this.m_token, params);
  }

  private static m_answerShippingQuery = TelegramBotAPI.request_decorator<true, MethodParams.AnswerShippingQuery>("answerShippingQuery", [], ["shipping_options"]);
  public answerShippingQuery(params: MethodParams.AnswerShippingQuery) : Promise<true> {
    if (params.ok && params.shipping_options === undefined) {
      return Promise.reject(new Error("Parameter 'shipping_options' must be specified if 'ok' is true!"));
    } else if (!params.ok && params.error_message === undefined) {
      return Promise.reject(new Error("Parameter 'error_message' must be specified if 'ok' is false!"));
    }

    return TelegramBotAPI.m_answerShippingQuery(this.m_token, params);
  }

  private static m_answerPreCheckoutQuery = TelegramBotAPI.request_decorator<true, MethodParams.AnswerPreCheckoutQuery>("answerPreCheckoutQuery");
  public answerPreCheckoutQuery(params: MethodParams.AnswerPreCheckoutQuery) : Promise<true> {
    if (!params.ok && params.error_message === undefined) {
      return Promise.reject(new Error("Parameter 'error_message' must be specified if 'ok' is false!"));
    }
    return TelegramBotAPI.m_answerPreCheckoutQuery(this.m_token, params);
  }

  private static m_setPassportDataErrors = TelegramBotAPI.request_decorator<true, MethodParams.SetPassportDataErrors>("setPassportDataErrors", [], ["errors"]);
  public setPassportDataErrors(params: MethodParams.SetPassportDataErrors) : Promise<true> {
    return TelegramBotAPI.m_setPassportDataErrors(this.m_token, params);
  }

  private static m_sendGame = TelegramBotAPI.request_decorator<Message, MethodParams.SendGame>("sendGame", [], ["reply_markup"]);
  public sendGame(params: MethodParams.SendGame) : Promise<Message> {
    return TelegramBotAPI.m_sendGame(this.m_token, params);
  }

  private static m_setGameScore = TelegramBotAPI.request_decorator<Message | true | string, MethodParams.SetGameScore>("setGameScore");
  public setGameScore(params: MakeRequired<Omit<MethodParams.SetGameScore, "inline_message_id">, "chat_id" | "message_id">) : Promise<true | string>;
  public setGameScore(params: MakeRequired<Omit<MethodParams.SetGameScore, "chat_id" | "message_id">, "inline_message_id">) : Promise<Message | string>;
  public setGameScore(params: MethodParams.SetGameScore) : Promise<Message | true | string> {
    return TelegramBotAPI.m_setGameScore(this.m_token, params);
  }

  private static m_getGameHighScores = TelegramBotAPI.request_decorator<GameHighScore[], MethodParams.GetGameHighScores>("getGameHighScores");
  public getGameHighScores(params: MakeRequired<Omit<MethodParams.GetGameHighScores, "inline_message_id">, "chat_id" | "message_id">) : Promise<GameHighScore[]>;
  public getGameHighScores(params: MakeRequired<Omit<MethodParams.GetGameHighScores, "chat_id" | "message_id">, "inline_message_id">) : Promise<GameHighScore[]>;
  public getGameHighScores(params: MethodParams.GetGameHighScores) : Promise<GameHighScore[]> {
    return TelegramBotAPI.m_getGameHighScores(this.m_token, params);
  }
}
