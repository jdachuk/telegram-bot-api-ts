import { User } from "./user";

export type MessageEntity = {
  type:
    | "mention"
    | "hashtag"
    | "cashtag"
    | "bot_command"
    | "phone_number"
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "code"
    | "pre"
    | "text_link"
    | "text_mention";
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
};
