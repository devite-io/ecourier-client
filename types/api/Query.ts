export type Query =
  | string
  | {
      Greater?: string;
      GreaterEqual?: string;
      Less?: string;
      LessEqual?: string;
      Equal?: string;
      NotEqual?: string;
      Like?: string[];
      NotLike?: string[];
    }
  | { [key: string]: Query };
