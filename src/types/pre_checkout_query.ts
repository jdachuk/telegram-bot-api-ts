import { Currency } from "./currency";
import { OrderInfo } from "./order_info";
import { User } from "./user";

export type PreCheckoutQuery = {
  id: string;
  from: User;
  currency: Currency.CurrencyCode;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id: string;
  order_info: OrderInfo;
};
