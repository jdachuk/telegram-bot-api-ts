import { User } from "./user";

export type PollAnswer = {
  poll_id: string;
  user: User;
  option_ids: number[];
};
