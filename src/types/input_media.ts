import { MessageEntity } from "./message_entity";
import { InputFile } from "./input_file";

export type InputMediaPhoto = {
  type: "photo";
  media: InputFile;
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
};

export type InputMediaVideo = {
  type: "video";
  media: InputFile;
  thumb?: { file_path: string };
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  width?: number;
  height?: number;
  duration?: number;
  supports_streaming?: boolean;
};

export type InputMediaAnimation = {
  type: "animation";
  media: InputFile;
  thumb?: { file_path: string };
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  width?: number;
  height?: number;
  duration?: number;
};

export type InputMediaAudio = {
  type: "audio";
  media: InputFile;
  thumb?: { file_path: string };
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  duration?: number;
  performer?: string;
  title?: string;
};

export type InputMediaDocument = {
  type: "document";
  media: InputFile;
  thumb?: { file_path: string };
  caption?: string;
  parse_mode?: "MarkdownV2" | "HTML" | "Markdown";
  caption_entities?: MessageEntity[];
  disable_content_type_detection?: boolean;
};

export type InputMedia =
  | InputMediaPhoto
  | InputMediaVideo
  | InputMediaAnimation
  | InputMediaAudio
  | InputMediaDocument;
