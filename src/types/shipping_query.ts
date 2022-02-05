import { ShippingAddress } from "./shipping_address";
import { User } from "./user";

export type ShippingQuery = {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
};
