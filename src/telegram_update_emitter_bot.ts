import { CallbackQuery } from './types/callback_query';
import { ChatJoinRequest } from './types/chat_join_request';
import { ChatMemberUpdated } from './types/chat_member_updated';
import { ChosenInlineResult } from "./types/chosen_inline_result";
import { InlineQuery } from './types/inline_query';
import { Message } from "./types/message";
import { Poll } from "./types/poll";
import { PollAnswer } from './types/poll_answer';
import { PreCheckoutQuery } from "./types/pre_checkout_query";
import { ShippingQuery } from './types/shipping_query';
import { TelegramBotAPI } from './telegram_bot_api';
import { TelegramUpdateListener } from './telegram_update_listener';
import { Update, UpdateType } from './types/update';
import * as EventEmitter from 'events';

export type ListenerFunction = 
  | ((message: Message) => void)
  | ((edited_message: Message) => void)
  | ((channel_post: Message) => void)
  | ((edited_channel_post: Message) => void)
  | ((inline_query: InlineQuery) => void)
  | ((chosen_inline_result: ChosenInlineResult) => void)
  | ((callback_query: CallbackQuery) => void)
  | ((shipping_query: ShippingQuery) => void)
  | ((pre_checkout_query: PreCheckoutQuery) => void)
  | ((poll: Poll) => void)
  | ((poll_answer: PollAnswer) => void)
  | ((my_chat_member: ChatMemberUpdated) => void)
  | ((chat_member: ChatMemberUpdated) => void)
  | ((chat_join_request: ChatJoinRequest) => void)
  | ((message: Message, match?: string, groups?: string[], index?: number) => void);

export class TelegramUpdateEmitterBot extends TelegramBotAPI {
  private m_eventEmitter: EventEmitter;
  private m_eventMap: Map<RegExp, ((message: Message, match?: string, groups?: string[], index?: number) => void)[]>;

  constructor(token: string) {
    super(token);

    this.m_eventEmitter = new EventEmitter();
    this.m_eventMap = new Map<RegExp, ((message: Message, match?: string, groups?: string[], index?: number) => void)[]>();
  }

  private register_event_listener(event: RegExp | UpdateType, listener: ListenerFunction) {
    if (typeof event === "string") {
      this.m_eventEmitter.on(event, listener);
    } else {
      if (!this.m_eventMap.has(event)) {
        this.m_eventMap.set(event, []);
      }

      this.m_eventMap.get(event)?.push(listener as ((message: Message, match?: string, groups?: string[], index?: number) => void));
    }
    return this;
  }

  private process_update_message(message: Message) {
    let send_message_event: boolean = true;

    if (message.text !== undefined) {
      this.m_eventMap.forEach((listeners, event) => {
        if (message.text && event.test(message.text)) {
          const result = event.exec(message.text);
          const [match, ...groups] = result as RegExpExecArray;

          send_message_event = false;

          return listeners.forEach((listener) => {
            listener.apply(listener, [message, match, groups, result?.index || 0]);
          });
        }
      });
    }

    if (send_message_event) {
      this.m_eventEmitter.emit("message", message);
    }
  }

  private process_update_edited_message(edited_message: Message) {
    this.m_eventEmitter.emit("edited_message", edited_message);
  }

  private process_update_channel_post(channel_post: Message) {
    this.m_eventEmitter.emit("channel_post", channel_post);
  }

  private process_update_edited_channel_post(edited_channel_post: Message) {
    this.m_eventEmitter.emit("edited_channel_post", edited_channel_post);
  }

  private process_update_inline_query(inline_query: InlineQuery) {
    this.m_eventEmitter.emit("inline_query", inline_query);
  }

  private process_update_chosen_inline_result(chosen_inline_result: ChosenInlineResult) {
    this.m_eventEmitter.emit("chosen_inline_result", chosen_inline_result);
  }

  private process_update_callback_query(callback_query: CallbackQuery) {
    this.m_eventEmitter.emit("callback_query", callback_query);
  }

  private process_update_shipping_query(shipping_query: ShippingQuery) {
    this.m_eventEmitter.emit("shipping_query", shipping_query);
  }

  private process_update_pre_checkout_query(pre_checkout_query: PreCheckoutQuery) {
    this.m_eventEmitter.emit("pre_checkout_query", pre_checkout_query);
  }

  private process_update_poll(poll: Poll) {
    this.m_eventEmitter.emit("poll", poll);
  }

  private process_update_poll_answer(poll_answer: PollAnswer) {
    this.m_eventEmitter.emit("poll_answer", poll_answer);
  }

  private process_update_my_chat_member(my_chat_member: ChatMemberUpdated) {
    this.m_eventEmitter.emit("my_chat_member", my_chat_member);
  }

  private process_update_chat_member(chat_member: ChatMemberUpdated) {
    this.m_eventEmitter.emit("chat_member", chat_member);
  }

  private process_update_chat_join_request(chat_join_request: ChatJoinRequest) {
    this.m_eventEmitter.emit("chat_join_request", chat_join_request);
  }

  protected process_update(update: Update) {
    if (update.message !== undefined) {
      return this.process_update_message(update.message);
    } else if (update.edited_message !== undefined) {
      return this.process_update_edited_message(update.edited_message);
    } else if (update.channel_post !== undefined) {
      return this.process_update_channel_post(update.channel_post);
    } else if (update.edited_channel_post !== undefined) {
      return this.process_update_edited_channel_post(update.edited_channel_post);
    } else if (update.inline_query !== undefined) {
      return this.process_update_inline_query(update.inline_query);
    } else if (update.chosen_inline_result !== undefined) {
      return this.process_update_chosen_inline_result(update.chosen_inline_result);
    } else if (update.callback_query !== undefined) {
      return this.process_update_callback_query(update.callback_query);
    } else if (update.shipping_query !== undefined) {
      return this.process_update_shipping_query(update.shipping_query);
    } else if (update.pre_checkout_query !== undefined) {
      return this.process_update_pre_checkout_query(update.pre_checkout_query);
    } else if (update.poll !== undefined) {
      return this.process_update_poll(update.poll);
    } else if (update.poll_answer !== undefined) {
      return this.process_update_poll_answer(update.poll_answer);
    } else if (update.my_chat_member !== undefined) {
      return this.process_update_my_chat_member(update.my_chat_member);
    } else if (update.chat_member !== undefined) {
      return this.process_update_chat_member(update.chat_member);
    } else if (update.chat_join_request !== undefined) {
      return this.process_update_chat_join_request(update.chat_join_request);
    }
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
  public on(event: RegExp | UpdateType, listener: ListenerFunction) {
    return this.register_event_listener(event, listener);
  }

  public use(update_listener: TelegramUpdateListener) {
    const event_map = update_listener.getEventMap();

    event_map.forEach((listeners, event) => {
      listeners.forEach((listener) => {
        this.register_event_listener(event, listener);
      });
    });
  }
}
