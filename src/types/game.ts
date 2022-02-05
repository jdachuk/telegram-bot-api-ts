import { Animation } from "./animation";
import { MessageEntity } from "./message_entity";
import { PhotoSize } from "./photo_size";

export type Game = {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
};
