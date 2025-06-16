import ECourierClient from "./ECourierClient";
import HTTPRequestMethod from "#http/HTTPRequestMethod";
import { ClientRequestOptions } from "#types/ClientRequestOptions";

class Client {
  protected readonly client: ECourierClient;

  constructor(client: ECourierClient) {
    this.client = client;
  }

  protected doRequest(method: HTTPRequestMethod, path: string, options?: ClientRequestOptions) {
    return this.client.doRequest(path, { ...options, method });
  }

  protected get(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.GET, path, options);
  }

  protected post(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.POST, path, options);
  }

  protected delete(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.DELETE, path, options);
  }

  protected patch(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.PATCH, path, options);
  }

  protected put(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.PUT, path, options);
  }

  protected options(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.OPTIONS, path, options);
  }
}

export default Client;
