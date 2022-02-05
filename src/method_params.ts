import { MessageEntity } from "./types/message_entity";
import { UpdateType } from "./types/update";
import { InlineKeyboardMarkup } from "./types/inline_keyboard_markup";
import { ReplyKeyboardMarkup } from "./types/reply_keyboard_markup";
import { ReplyKeyboardRemove } from "./types/reply_keyboard_remove";
import { ForceReply } from "./types/force_reply";
import { InputFile } from "./types/input_file";
import {
  InputMedia,
  InputMediaAudio,
  InputMediaDocument,
  InputMediaPhoto,
  InputMediaVideo,
} from "./types/input_media";
import { ChatPermissions } from "./types/chat_permissions";
import { BotCommand } from "./types/bot_command";
import { BotCommandScope } from "./types/bot_command_scope";
import { LanguageCode } from "./types/language_code";
import { MaskPosition } from "./types/mask_position";
import { InlineQueryResult } from "./types/inline_query_result";
import { Currency } from "./types/currency";
import { LabeledPrice } from "./types/labeled_price";
import { ShippingOption } from "./types/shipping_option";
import { PassportElementError } from "./types/passport_element_error";

type ParseMode = "MarkdownV2" | "HTML" | "Markdown";
type ReplyMarkup =
  | InlineKeyboardMarkup
  | ReplyKeyboardMarkup
  | ReplyKeyboardRemove
  | ForceReply;

export namespace MethodParams {
  export type GetUpdates = {
    offset?: number;
    limit?: number;
    timeout?: number;
    allowed_updates?: UpdateType[];
  };

  export type SetWebhook = {
    url: string;
    certificate?: { file_path: string };
    ip_address?: string;
    max_connections?: number;
    allowed_updates?: UpdateType[];
    drop_pending_updates?: boolean;
  };

  export type DeleteWebhook = {
    drop_pending_updates?: boolean;
  };

  export type SendMessage = {
    chat_id: number | string;
    text: string;
    parse_mode?: ParseMode;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type ForwardMessage = {
    chat_id: number | string;
    from_chat_id: number | string;
    disable_notification?: boolean;
    message_id: number;
  };

  export type CopyMessage = {
    chat_id: number | string;
    from_chat_id: number | string;
    message_id: number;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendPhoto = {
    chat_id: number | string;
    photo: InputFile;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendAudio = {
    chat_id: number | string;
    audio: InputFile;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    duration?: number;
    performer?: string;
    title?: string;
    thumb?: { file_path: string };
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendDocument = {
    chat_id: number | string;
    document: InputFile;
    thumb?: { file_path: string };
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    disable_content_type_detection?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendVideo = {
    chat_id: number | string;
    video: InputFile;
    duration?: number;
    width?: number;
    height?: number;
    thumb?: { file_path: string };
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    supports_streaming?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendAnimation = {
    chat_id: number | string;
    animation: InputFile;
    duration?: number;
    width?: number;
    height?: number;
    thumb?: { file_path: string };
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendVoice = {
    chat_id: number | string;
    voice: InputFile;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    duration?: number;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendVideoNote = {
    chat_id: number | string;
    video_note: InputFile;
    duration?: number;
    length?: number;
    thumb?: { file_path: string };
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendMediaGroup = {
    chat_id: number | string;
    media: (
      | InputMediaAudio
      | InputMediaDocument
      | InputMediaPhoto
      | InputMediaVideo
    )[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
  };

  export type SendLocation = {
    chat_id: number | string;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type EditMessageLiveLocation = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: ReplyMarkup;
  };

  export type StopMessageLiveLocation = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    reply_markup?: ReplyMarkup;
  };

  export type SendVenue = {
    chat_id: number | string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendContact = {
    chat_id: number | string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendPoll = {
    chat_id: number | string;
    question: string;
    options: string[];
    is_anonymous?: boolean;
    type?: "quiz" | "regular";
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: ParseMode;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendDice = {
    chat_id: number | string;
    emoji?: "🎲" | "🎯" | "🏀" | "⚽" | "🎳" | "🎰";
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type SendChatAction = {
    chat_id: number | string;
    action:
      | "typing"
      | "upload_photo"
      | "record_video"
      | "upload_video"
      | "record_voice"
      | "upload_voice"
      | "upload_document"
      | "choose_sticker"
      | "find_location"
      | "record_video_note"
      | "upload_video_note";
  };

  export type GetUserProfilePhotos = {
    user_id: number;
    offset?: number;
    limit?: number;
  };

  export type GetFile = {
    file_id: string;
  };

  export type BanChatMember = {
    chat_id: number | string;
    user_id: number;
    until_date?: number;
    revoke_messages?: boolean;
  };

  export type UnbanChatMember = {
    chat_id: number | string;
    user_id: number;
    only_if_banned?: boolean;
  };

  export type RestrictChatMember = {
    chat_id: number | string;
    user_id: number;
    permissions: ChatPermissions;
    until_date?: number;
  };

  export type PromoteChatMember = {
    chat_id: number | string;
    user_id: number;
    is_anonymous?: boolean;
    can_manage_chat?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_manage_voice_chats?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
  };

  export type SetChatAdministratorCustomTitle = {
    chat_id: number | string;
    user_id: number;
    custom_title: string;
  };

  export type BanChatSenderChat = {
    chat_id: number | string;
    sender_chat_id: number;
  };

  export type UnbanChatSenderChat = {
    chat_id: number | string;
    sender_chat_id: number;
  };

  export type SetChatPermissions = {
    chat_id: number | string;
    permissions: ChatPermissions;
  };

  export type ExportChatInviteLink = {
    chat_id: number | string;
  };

  export type CreateChatInviteLink = {
    chat_id: number | string;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    creates_join_request?: boolean;
  };

  export type EditChatInviteLink = {
    chat_id: number | string;
    invite_link: string;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    creates_join_request?: boolean;
  };

  export type RevokeChatInviteLink = {
    chat_id: number | string;
    invite_link: string;
  };

  export type ApproveChatJoinRequest = {
    chat_id: number | string;
    user_id: number;
  };

  export type DeclineChatJoinRequest = {
    chat_id: number | string;
    user_id: number;
  };

  export type SetChatPhoto = {
    chat_id: number | string;
    photo: { file_path: string };
  };

  export type DeleteChatPhoto = {
    chat_id: number | string;
  };

  export type SetChatTitle = {
    chat_id: number | string;
    title: string;
  };

  export type SetChatDescription = {
    chat_id: number | string;
    description: string;
  };

  export type PinChatMessage = {
    chat_id: number | string;
    message_id: number;
    disable_notification?: boolean;
  };

  export type UnpinChatMessage = {
    chat_id: number | string;
    message_id?: number;
  };

  export type UnpinAllChatMessages = {
    chat_id: number | string;
  };

  export type LeaveChat = {
    chat_id: number | string;
  };

  export type GetChat = {
    chat_id: number | string;
  };

  export type GetChatAdministrators = {
    chat_id: number | string;
  };

  export type GetChatMemberCount = {
    chat_id: number | string;
  };

  export type GetChatMember = {
    chat_id: number | string;
    user_id: number;
  };

  export type SetChatStickerSet = {
    chat_id: number | string;
    sticker_set_name: string;
  };

  export type DeleteChatStickerSet = {
    chat_id: number | string;
  };

  export type AnswerCallbackQuery = {
    callback_query_id: string;
    text?: string;
    show_alert?: boolean;
    url?: string;
    cache_time?: number;
  };

  export type SetMyCommands = {
    commands: BotCommand[];
    scope?: BotCommandScope;
    language_code?: LanguageCode;
  };

  export type DeleteMyCommands = {
    scope?: BotCommandScope;
    language_code?: LanguageCode;
  };

  export type GetMyCommands = {
    scope?: BotCommandScope;
    language_code?: LanguageCode;
  };

  export type EditMessageText = {
    chat_id: number | string;
    message_id?: number;
    inline_message_id?: string;
    text: string;
    parse_mode?: ParseMode;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
  };

  export type EditMessageCaption = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    caption?: string;
    parse_mode?: ParseMode;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
  };

  export type EditMessageMedia = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    media: InputMedia;
    reply_markup?: InlineKeyboardMarkup;
  };

  export type EditMessageReplyMarkup = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    reply_markup?: InlineKeyboardMarkup;
  };

  export type StopPoll = {
    chat_id: number | string;
    message_id: number;
    reply_markup?: InlineKeyboardMarkup;
  };

  export type DeleteMessage = {
    chat_id: number | string;
    message_id: number;
  };

  export type SendSticker = {
    chat_id: number | string;
    sticker: InputFile;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: ReplyMarkup;
  };

  export type GetStickerSet = {
    name: string;
  };

  export type UploadStickerFile = {
    user_id: number;
    png_sticker: { file_path: string };
  };

  export type CreateNewStickerSet = {
    user_id: number;
    name: string;
    title: string;
    png_sticker?: InputFile;
    tgs_sticker?: { file_path: string };
    emojis: string;
    contains_masks?: boolean;
    mask_position?: MaskPosition;
  };

  export type AddStickerToSet = {
    user_id: number;
    name: string;
    png_sticker?: InputFile;
    tgs_sticker?: { file_path: string };
    emojis: string;
    mask_position?: MaskPosition;
  };

  export type SetStickerPositionInSet = {
    sticker: string;
    position: number;
  };

  export type DeleteStickerFromSet = {
    sticker: string;
  };

  export type SetStickerSetThumb = {
    name: string;
    user_id: number;
    thumb: InputFile;
  };

  export type AnswerInlineQuery = {
    inline_query_id: string;
    results: InlineQueryResult[];
    cache_time?: number;
    is_personal?: boolean;
    next_offset?: string;
    switch_pm_text?: string;
    switch_pm_parameter?: string;
  };

  export type SendInvoice = {
    chat_id: number | string;
    title: string;
    description: string;
    payload: string;
    provider_token: string;
    currency: Currency.CurrencyCode;
    prices: LabeledPrice[];
    max_tip_amount?: number;
    suggested_tip_amounts?: number[];
    start_parameter?: string;
    provider_data?: string;
    photo_url?: string;
    photo_size?: number;
    photo_width?: number;
    photo_height?: number;
    need_name?: boolean;
    need_phone_number?: boolean;
    need_email?: boolean;
    need_shipping_address?: boolean;
    send_phone_number_to_provider?: boolean;
    send_email_to_provider?: boolean;
    is_flexible?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup;
  };

  export type AnswerShippingQuery = {
    shipping_query_id: string;
    ok: boolean;
    shipping_options?: ShippingOption[];
    error_message?: string;
  };

  export type AnswerPreCheckoutQuery = {
    pre_checkout_query_id: string;
    ok: boolean;
    error_message?: string;
  };

  export type SetPassportDataErrors = {
    user_id: number;
    errors: PassportElementError[];
  };

  export type SendGame = {
    chat_id: number;
    game_short_name: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup;
  };

  export type SetGameScore = {
    user_id: number;
    score: number;
    force?: boolean;
    disable_edit_message?: boolean;
    chat_id?: number;
    message_id?: number;
    inline_message_id?: string;
  };

  export type GetGameHighScores = {
    user_id: number;
    chat_id?: number;
    message_id?: number;
    inline_message_id?: string;
  };
}
