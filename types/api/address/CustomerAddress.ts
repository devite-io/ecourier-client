export interface CustomerAddress {
  /** 1 = "Pick up", 2 = "Delivery", 3 = "Pick up + Delivery" */
  Type: 1 | 2 | 3;
  Number?: string;
  Name1: string;
  Name2?: string;
  Name3?: string;
  Telefon?: string;
  Mail?: string;
  Street: string;
  House?: string;
  /** 2-letter ISO country code */
  Country: string;
  State?: string;
  Zipcode: string;
  City: string;
  District?: string;
  AddressInfo?: string;
  Date: string;
  TimeFrom: string;
  TimeTo: string;
  Private?: "0" | "1";
  Uuid?: string;
}
