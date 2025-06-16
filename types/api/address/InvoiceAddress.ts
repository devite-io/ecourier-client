export interface InvoiceAddress {
  Name1: string;
  Name2?: string;
  Street: string;
  House?: string;
  /** 2-letter ISO country code */
  Country: string;
  Zipcode: string;
  City: string;
}
