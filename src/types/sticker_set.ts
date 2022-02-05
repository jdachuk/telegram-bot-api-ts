import { PhotoSize } from "./photo_size";
import { Sticker } from "./sticker";

export type StickerSet = {
  name: string;
  title: string;
  is_animated: boolean;
  contain_masks: boolean;
  stickers: Sticker[];
  thumb?: PhotoSize;
};
