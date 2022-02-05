import { InlineKeyboardMarkup } from "./inline_keyboard_markup";
import { MessageEntity } from "./message_entity";
import { InputMessageContent } from "./input_message_content";

export type InlineQueryResultArticle = {
  type: "article";
  id: string;
  title: string;
  input_message_content: InputMessageContent;
  reply_markup?: InlineKeyboardMarkup;
  url?: string;
  hide_url?: boolean;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultPhoto = {
  type: "photo";
  id: string;
  photo_url: string;
  thumb_url: string;
  photo_width?: number;
  photo_height?: number;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultGif = {
  type: "gif";
  id: string;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
  thumb_url: string;
  thumb_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
  title?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultMpeg4Gif = {
  type: "mpeg4_gif";
  id: string;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumb_url: string;
  thumb_mime_type?: "image/jpeg" | "image/gif" | "video/mp4";
  title?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultVideo = {
  type: "video";
  id: string;
  video_url: string;
  mime_type: "text/html" | "video/mp4";
  thumb_url: string;
  title: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultAudio = {
  type: "audio";
  id: string;
  audio_url: string;
  title: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  performer?: string;
  audio_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultVoice = {
  type: "voice";
  id: string;
  voice_url: string;
  title: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  voice_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultDocument = {
  type: "document";
  id: string;
  title: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  document_url: string;
  mime_type: "application/pdf" | "application/zip";
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultLocation = {
  type: "location";
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultVenue = {
  type: "venue";
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultContact = {
  type: "contact";
  id: string;
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultGame = {
  type: "game";
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
};

export type InlineQueryResultCachedPhoto = {
  type: "photo";
  id: string;
  photo_file_id: string;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedGif = {
  type: "gif";
  id: string;
  gif_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedMpeg4Gif = {
  type: "mpeg4_gif";
  id: string;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedSticker = {
  type: "sticker";
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedDocument = {
  type: "document";
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedVideo = {
  type: "video";
  id: string;
  video_file_id: string;
  title: string;
  description?: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedVoice = {
  type: "voice";
  id: string;
  voice_file_id: string;
  title: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedAudio = {
  type: "audio";
  id: string;
  audio_file_id: string;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResult =
  | InlineQueryResultArticle
  | InlineQueryResultPhoto
  | InlineQueryResultGif
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultVideo
  | InlineQueryResultAudio
  | InlineQueryResultVoice
  | InlineQueryResultDocument
  | InlineQueryResultLocation
  | InlineQueryResultVenue
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultCachedAudio;
