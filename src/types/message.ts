import { Animation } from "./animation";
import { Audio } from "./audio";
import { Chat } from "./chat";
import { Contact } from "./contact";
import { Dice } from "./dice";
import { Document } from "./document";
import { Game } from "./game";
import { InlineKeyboardMarkup } from "./inline_keyboard_markup";
import { Invoice } from "./invoice";
import { Location } from "./location";
import { MessageAutoDeleteTimerChanged } from "./message_auto_delete_timer_changed";
import { MessageEntity } from "./message_entity";
import { PassportData } from "./passport_data";
import { PhotoSize } from "./photo_size";
import { Poll } from "./poll";
import { ProximityAlertTriggered } from "./proximity_alert_triggered";
import { Sticker } from "./sticker";
import { SuccessfulPayment } from "./successful_payment";
import { User } from "./user";
import { Venue } from "./venue";
import { Video } from "./video";
import { VoiceChatEnded } from "./voice_chat_ended";
import { VoiceChatParticipantsInvited } from "./voice_chat_participants_invited";
import { VoiceChatScheduled } from "./voice_chat_scheduled";
import { VoiceChatStarted } from "./voice_chat_started";

export type MessageId = {
  message_id: number;
};

export type Message = {
  message_id: number;
  from?: User;
  sender_chat?: Chat;
  date: number;
  chat: Chat;
  forward_from?: User;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  reply_to_message?: Message;
  via_bot?: User;
  edit_date?: number;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: MessageEntity[];
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  photo?: PhotoSize[];
  sticker?: Sticker;
  video?: Video;
  caption?: string;
  caption_entities?: MessageEntity[];
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: true;
  group_chat_created?: true;
  supergroup_chat_created?: true;
  channel_chat_created?: true;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  connected_website?: string;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  voice_chat_scheduled?: VoiceChatScheduled;
  voice_chat_started?: VoiceChatStarted;
  voice_chat_ended?: VoiceChatEnded;
  voice_chat_participants_invited?: VoiceChatParticipantsInvited;
  reply_markup?: InlineKeyboardMarkup;
};
