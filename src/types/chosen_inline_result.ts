import { Location } from "./location";
import { User } from "./user";

export type ChosenInlineResult = {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query?: string;
};
