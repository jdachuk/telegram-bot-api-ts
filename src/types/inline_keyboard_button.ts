import { CallbackGame } from "./callback_game";
import { LoginUrl } from "./login_url";

type InlineKeyboardButtonUrl = {
  text: string;
  url: string;
};

type InlineKeyboardButtonLoginUrl = {
  text: string;
  login_url: LoginUrl;
};

type InlineKeyboardButtonCallbackData = {
  text: string;
  callback_data: string;
};

type InlineKeyboardButtonSwitchInlineQuery = {
  text: string;
  switch_inline_query: string;
};

type InlineKeyboardButtonSwitchInlineQueryCurrentChat = {
  text: string;
  switch_inline_query_current_chat: string;
};

type InlineKeyboardButtonCallbackGame = {
  text: string;
  callback_game: CallbackGame;
};

type InlineKeyboardButtonPay = {
  text: string;
  pay: boolean;
};

export type InlineKeyboardButton =
  | InlineKeyboardButtonUrl
  | InlineKeyboardButtonLoginUrl
  | InlineKeyboardButtonCallbackData
  | InlineKeyboardButtonSwitchInlineQuery
  | InlineKeyboardButtonSwitchInlineQueryCurrentChat
  | InlineKeyboardButtonCallbackGame
  | InlineKeyboardButtonPay;
