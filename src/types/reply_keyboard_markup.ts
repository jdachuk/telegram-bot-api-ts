import { KeyboardButton } from "./keyboard_button";

export type ReplyKeyboardMarkup = {
  keyboard: Array<KeyboardButton[]>;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
};
