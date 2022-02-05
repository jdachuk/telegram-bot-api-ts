import { CallbackQuery } from "./callback_query";
import { ChatJoinRequest } from "./chat_join_request";
import { ChatMemberUpdated } from "./chat_member_updated";
import { ChosenInlineResult } from "./chosen_inline_result";
import { InlineQuery } from "./inline_query";
import { Message } from "./message";
import { Poll } from "./poll";
import { PollAnswer } from "./poll_answer";
import { PreCheckoutQuery } from "./pre_checkout_query";
import { ShippingQuery } from "./shipping_query";

export type Update = {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  poll?: Poll;
  poll_answer?: PollAnswer;
  my_chat_member?: ChatMemberUpdated;
  chat_member?: ChatMemberUpdated;
  chat_join_request?: ChatJoinRequest;
};

export type UpdateType =
  | "message"
  | "edited_message"
  | "channel_post"
  | "edited_channel_post"
  | "inline_query"
  | "chosen_inline_result"
  | "callback_query"
  | "shipping_query"
  | "pre_checkout_query"
  | "poll"
  | "poll_answer"
  | "my_chat_member"
  | "chat_member"
  | "chat_join_request";
