export interface Client {
  ClientNumber: string;
  Name1?: string;
  Name2?: string;
  Street?: string;
  House?: string;
  Country?: string;
  Zipcode?: string;
  City?: string;
  Telefon?: string;
  Email?: string;
  /** Send mail for status updates like 'Order created' or 'Order confirmed' */
  Maildoc1?: "0" | "1";
  /** Send mail for status updates like 'Order delivered' or 'Delivery proof' */
  Maildoc2?: string;
  ClientName?: string;
  Purchaser?: string;
  /** '0' = "Male", '1' = "Female" */
  PurchaserSex?: "0" | "1";
  /** First name */
  PurchaserName1?: string;
  /** Last name */
  PurchaserName2?: string;
  PurchaserTel?: string;
  PurchaserEmail?: string;
  PurchaserInfo?: string;
}
