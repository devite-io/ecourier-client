import { ClientRequestOptions } from "#types/ClientRequestOptions";
import { ClientResponse } from "#types/ClientResponse";
import HTTPRequestMethod from "#http/HTTPRequestMethod";
import { FetchResponse, ofetch } from "ofetch";
import OrderClient from "./OrderClient";

class ECourierClient {
  protected readonly baseUrl: string;
  protected readonly apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl + "/sf/web/transfer/sj";
    this.apiKey = apiKey;
  }

  /**
   * Sends a request to the eCourier API.
   * @throws {import('ofetch').FetchError} if the request is invalid
   */
  public doRequest(path: string, options?: ClientRequestOptions): Promise<ClientResponse> {
    if (path.length > 2048) {
      throw new Error("Path may not exceed 2048 characters");
    }

    return new Promise(async (resolve, reject) =>
      ofetch(this.baseUrl + path, {
        method: options?.method || HTTPRequestMethod.GET,
        query: options?.query,
        headers: {
          ...(options?.body ? { "Content-Type": "application/json" } : {}),
          ...options?.headers,
          apikey: this.apiKey
        },
        body: options?.body,
        responseType: "blob",
        onResponse: async ({ response }) => {
          const clientResponse: ClientResponse = {
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: response.headers,
            body: await this.parseBody(response)
          };

          resolve(clientResponse);
        },
        onRequestError: ({ error }) => reject(error),
        onResponseError: async ({ response }) => {
          resolve({
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: response.headers,
            body: await this.parseBody(response)
          });
        }
      }).catch(() => undefined)
    );
  }

  private async parseBody(response: FetchResponse<Blob>): Promise<any | undefined> {
    const textContent = await response._data?.text();

    // API does not send correct 'Content-Type' header
    if (textContent && textContent.trim().startsWith("{")) {
      return JSON.parse(textContent);
    }

    return textContent;
  }

  public forOrders(): OrderClient {
    return new OrderClient(this);
  }
}

export default ECourierClient;
