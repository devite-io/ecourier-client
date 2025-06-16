import HTTPRequestMethod from "#http/HTTPRequestMethod";

export interface ClientRequestOptions {
  /** @default HTTPRequestMethod.GET */
  method?: HTTPRequestMethod;
  query?: Record<string, any>;
  headers?: Record<string, string>;
  body?: Record<string, any> | string;
}
