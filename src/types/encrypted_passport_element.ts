import { PassportFile } from "./passport_file";

export type EncryptedPassportElementType =
  | "personal_details"
  | "passport"
  | "driver_license"
  | "identity_card"
  | "internal_passport"
  | "address"
  | "utility_bill"
  | "bank_statement"
  | "rental_agreement"
  | "passport_registration"
  | "temporary_registration"
  | "phone_number"
  | "email";

export type EncryptedPassportElement = {
  type: EncryptedPassportElementType;
  data?: string;
  phone_number?: string;
  email?: string;
  files?: PassportFile[];
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
  hash: string;
};
