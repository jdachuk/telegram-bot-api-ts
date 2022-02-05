import { ListenerFunction } from "./telegram_update_emitter_bot";
import { UpdateType } from "./types/update";
import {
  ChosenInlineResult,
  CallbackQuery,
  ShippingQuery,
  PreCheckoutQuery,
  Poll,
  PollAnswer,
  ChatMemberUpdated,
  ChatJoinRequest,
  InlineQuery,
  Message,
} from ".";

export class TelegramUpdateListener {
  private m_eventMap: Map<UpdateType | RegExp, ListenerFunction[]>;

  constructor() {
    this.m_eventMap = new Map<UpdateType | RegExp, ListenerFunction[]>();
  }

  public on(event: "message", listener: (message: Message) => void): this;
  public on(event: "edited_message", listener: (edited_message: Message) => void): this;
  public on(event: "channel_post", listener: (channel_post: Message) => void): this;
  public on(event: "edited_channel_post", listener: (edited_channel_post: Message) => void): this;
  public on(event: "inline_query", listener: (inline_query: InlineQuery) => void): this;
  public on(event: "chosen_inline_result", listener: (chosen_inline_result: ChosenInlineResult) => void): this;
  public on(event: "callback_query", listener: (callback_query: CallbackQuery) => void): this;
  public on(event: "shipping_query", listener: (shipping_query: ShippingQuery) => void): this;
  public on(event: "pre_checkout_query", listener: (pre_checkout_query: PreCheckoutQuery) => void): this;
  public on(event: "poll", listener: (poll: Poll) => void): this;
  public on(event: "poll_answer", listener: (poll_answer: PollAnswer) => void): this;
  public on(event: "my_chat_member", listener: (my_chat_member: ChatMemberUpdated) => void): this;
  public on(event: "chat_member", listener: (chat_member: ChatMemberUpdated) => void): this;
  public on(event: "chat_join_request", listener: (chat_join_request: ChatJoinRequest) => void): this;
  public on(event: RegExp, listener: (message: Message, match?: string, groups?: string[], index?: number) => void): this;
  public on(event: UpdateType | RegExp, listener: ListenerFunction) {
    if (!this.m_eventMap.has(event)) {
      this.m_eventMap.set(event, []);
    }
    this.m_eventMap.get(event)?.push(listener);

    return this;
  }

  public getEventMap(): Map<UpdateType | RegExp, ListenerFunction[]> {
    return this.m_eventMap;
  }
}
