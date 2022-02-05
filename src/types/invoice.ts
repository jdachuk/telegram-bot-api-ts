import { Currency } from "./currency";

export type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: Currency.CurrencyCode;
  total_amount: number;
};
