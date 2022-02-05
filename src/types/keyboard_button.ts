import { KeyboardButtonPollType } from "./keyboard_button_poll_type";

export type KeyboardButton = {
  text: string;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
};
