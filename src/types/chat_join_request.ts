import { Chat } from "./chat";
import { ChatInviteLink } from "./chat_invite_link";
import { User } from "./user";

export type ChatJoinRequest = {
  chat: Chat;
  from: User;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
};
