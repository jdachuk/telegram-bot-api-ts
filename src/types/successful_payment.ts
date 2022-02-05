import { Currency } from "./currency";
import { OrderInfo } from "./order_info";

export type SuccessfulPayment = {
  currency: Currency.CurrencyCode;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
};
