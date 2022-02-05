import { User } from "./user";

export type ChatMemberOwner = {
  status: "owner";
  user: User;
  is_anonymous: boolean;
  custom_title?: string;
};

export type ChatMemberAdministrator = {
  status: "administrator";
  user: User;
  can_be_edited: boolean;
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_voice_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  custom_title?: string;
};

export type ChatMemberMember = {
  status: "member";
  user: User;
};

export type ChatMemberRestricted = {
  status: "restricted";
  user: User;
  is_member: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_pin_messages: boolean;
  can_send_messages: boolean;
  can_send_media_messages: boolean;
  can_send_polls: boolean;
  can_send_other_messages: boolean;
  can_add_web_page_previews: boolean;
  until_date: number;
};

export type ChatMemberLeft = {
  status: "left";
  user: User;
};

export type ChatMemberBanned = {
  status: "kicked";
  user: User;
  until_date: number;
};

export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;
