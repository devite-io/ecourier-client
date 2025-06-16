export interface ClientResponse {
  statusCode: number;
  statusMessage: string;
  headers?: Headers;
  body?: any;
}
