import { MessageEntity } from "./message_entity";
import { PollOption } from "./poll_option";

export type Poll = {
  id: string;
  question: string;
  options: PollOption[];
  total_vouter_count: number;
  is_closed: boolean;
  is_anonymous: boolean;
  type: "regular" | "quiz";
  allows_multiple_answers: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
};
