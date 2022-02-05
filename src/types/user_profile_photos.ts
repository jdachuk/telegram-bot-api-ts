import { PhotoSize } from "./photo_size";

export type UserProfilePhotos = {
  total_count: number;
  photos: Array<PhotoSize[]>;
};
