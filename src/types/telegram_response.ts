export type TelegramResponse<R> = {
  ok: boolean;
  result?: R;
  error_code?: number;
  description?: string;
};
