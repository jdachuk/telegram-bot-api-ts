export type PassportElementErrorDataField = {
  source: "data";
  type:
    | "personal_details"
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "address";
  field_name: string;
  data_hash: string;
  message: string;
};

export type PassportElementErrorFrontSide = {
  source: "front_side";
  type: "passport" | "driver_license" | "identity_card" | "internal_passport";
  file_hash: string;
  message: string;
};

export type PassportElementErrorReverseSide = {
  source: "reverse_side";
  type: "driver_license" | "identity_card";
  file_hash: string;
  message: string;
};

export type PassportElementErrorSelfie = {
  source: "selfie";
  type: "passport" | "driver_license" | "identity_card" | "internal_passport";
  file_hash: string;
  message: string;
};

export type PassportElementErrorFile = {
  source: "file";
  type:
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  file_hash: string;
  message: string;
};

export type PassportElementErrorFiles = {
  source: "files";
  type:
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  file_hashes: string[];
  message: string;
};

export type PassportElementErrorTranslationFile = {
  source: "translation_file";
  type:
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  file_hash: string;
  message: string;
};

export type PassportElementErrorTranslationFiles = {
  source: "translation_files";
  type:
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  file_hashes: string[];
  message: string;
};

export type PassportElementErrorUnspecified = {
  source: "unspecified";
  type: string;
  element_hash: string;
  message: string;
};

export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;
