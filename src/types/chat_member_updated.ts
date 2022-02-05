import { Chat } from "./chat";
import { ChatInviteLink } from "./chat_invite_link";
import { ChatMember } from "./chat_member";
import { User } from "./user";

export type ChatMemberUpdated = {
  chat: Chat;
  from: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
};
