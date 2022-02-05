import { EncryptedPassportElement } from "./encrypted_passport_element";
import { EncryptedCredentials } from "./encrypted_credentials";

export type PassportData = {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
};
