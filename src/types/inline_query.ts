import { Location } from "./location";
import { User } from "./user";

export type InlineQuery = {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
  location?: Location;
};
