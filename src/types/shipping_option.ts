import { LabeledPrice } from "./labeled_price";

export type ShippingOption = {
  id: string;
  title: string;
  prices: LabeledPrice[];
};
