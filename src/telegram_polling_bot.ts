import { UpdateType } from './types/update';
import { TelegramUpdateEmitterBot } from './telegram_update_emitter_bot';

export type PollingOptions = {
  polling_interval?: number;
  params?: {
    allowed_updates?: UpdateType[];
    timeout?: number;
    limit?: number;
  };
}

const CONFLICT_ERROR_STATUS: number = 409;

export class TelegramPollingBot extends TelegramUpdateEmitterBot {
  private m_pollingTimer: any = null;
  private m_updatesOffset: number = 0;

  private m_options: PollingOptions = {
    polling_interval: 300,
    params: {
      timeout: 0,
      limit: 100,
    },
  };

  public static allowed_updates_all: UpdateType[] = [
    "message",
    "edited_message",
    "channel_post",
    "edited_channel_post",
    "inline_query",
    "chosen_inline_result",
    "callback_query",
    "shipping_query",
    "pre_checkout_query",
    "poll",
    "poll_answer",
    "my_chat_member",
    "chat_member",
    "chat_join_request",
  ]

  constructor(token: string, options?: PollingOptions) {
    super(token);

    if (options !== undefined) {
      if (options.polling_interval) {
        this.m_options.polling_interval = options.polling_interval;
      }
      if (options.params?.allowed_updates && this.m_options.params) {
        this.m_options.params.allowed_updates = options.params.allowed_updates;
      }
      if (options.params?.timeout && this.m_options.params) {
        this.m_options.params.timeout = options.params.timeout;
      }
      if (options.params?.limit && this.m_options.params) {
        this.m_options.params.limit = options.params.limit;
      }
    }
  }

  private polling() {
    this.getUpdates({ 
        offset: this.m_updatesOffset,
        allowed_updates: this.m_options.params?.allowed_updates,
        timeout: this.m_options.params?.timeout,
        limit: this.m_options.params?.limit,
      })
      .then((updates) => {
        if (updates.length) {
          this.m_updatesOffset = updates[updates.length - 1].update_id + 1;
        }
        
        for (const update of updates) {
          this.process_update(update);
        }
      })
      .catch((err) => {
        console.log(err);
        
        if (
          err.response !== undefined &&
          err.response.status === CONFLICT_ERROR_STATUS
        ) {
          return this.deleteWebhook();
        }
      })
      .finally(() => {
        this.m_pollingTimer = setTimeout(() => this.polling(), this.m_options.polling_interval)
      });
  }

  public startPolling(): void {
    if (this.m_pollingTimer !== null) {
      this.stopPolling();
    }
    this.m_pollingTimer = setTimeout(() => this.polling(), this.m_options.polling_interval);
  }

  public stopPolling(): void {
    if (this.m_pollingTimer !== null) {
      clearInterval(this.m_pollingTimer);
      this.m_pollingTimer = null;
    }
  }

  public isPolling(): boolean {
    return !!this.m_pollingTimer;
  }
}