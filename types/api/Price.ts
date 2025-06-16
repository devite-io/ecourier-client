export interface Price {
  ClientPriceNet?: number;
  ClientTax?: number;
  ClientPriceGross?: number;
  ClientIsFinal?: "0" | "1";
  CarrierPriceNet?: number;
  CarrierTax?: number;
  CarrierPriceGross?: number;
  CourierPriceNet?: number;
  CourierTax?: number;
  CourierPriceGross?: number;
}
