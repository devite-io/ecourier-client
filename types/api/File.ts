export interface File {
  Name: string;
  NameDisplay: string;
  Base64: string;
  SendOnInvoiceEmail?: "0" | "1";
}
