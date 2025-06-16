export interface OrderAddOn {
  ProductNumber: string;
  /** '1' = "Main product", '3' = "Manual add-on product", '4' or '8' = "Automatic add-on product" */
  Type?: "1" | "3" | "4" | "8";
  /** Short product name */
  ScreenText?: string;
  /** Full product name */
  LongText: string;
  Factor: string;
  Value: string;
  Currency: string;
}
