import { CourierState } from "#types/api/CourierState";

export interface OrderState extends CourierState {
  Group?: number;
  Final?: "0" | "1";
  PodImage?: string;
  AddressUuid?: string;
  /** 'P' = "Passport", 'F' = "Driver's license" */
  Extra1?: string;
  /** Last 5 digits of the document number */
  Extra2?: string;
  Extra3?: string;
  Extra4?: string;
}
