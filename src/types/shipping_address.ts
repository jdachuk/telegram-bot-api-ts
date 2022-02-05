import { Country } from "./country";

export type ShippingAddress = {
  country_code: Country.CountryCode;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};
