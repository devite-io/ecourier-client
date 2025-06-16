import { OrderState } from "./order/OrderState";

export interface Package {
  Id?: string;
  PackageHWB?: string;
  Reference1?: string;
  Reference2?: string;
  Weight?: string;
  Type?: string;
  DimWeight?: string;
  ClientDimWeight?: string;
  Length?: string;
  Width?: string;
  Height?: string;
  LengthAndGirthCombined?: string;
  Article?: Array<{
    ArticleNumber: string;
    PackageNoOfArt?: string;
    NoOfArticles: string;
    Text?: string;
  }>;
  State?: Array<OrderState>;
}
