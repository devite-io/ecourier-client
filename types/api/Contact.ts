export interface Contact {
  Shortcut?: string;
  FirstName?: string;
  LastName: string;
  /** '0' = "Male", '1' = "Female" */
  Prefix?: "0" | "1";
  Phone?: string;
  Mobile?: string;
  Email?: string;
  Fax?: string;
  Information?: string;
}
