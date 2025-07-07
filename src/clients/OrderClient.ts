import Client from "./Client";
import HttpError from "../http/HttpError";
import { Order } from "#types/api/order/Order";

class OrderClient extends Client {
  /**
   * @throws {HttpError | import('ofetch').FetchError} if the request failed
   */
  async createOrder(order: Order): Promise<{ Doc: { Order: Order[] } }> {
    const response = await this.post(`/order/new`, {
      body: { Doc: { Order: order } },
      query: { modus: "echo" }
    });

    if (response.statusCode == 201) return response.body as { Doc: { Order: Order[] } };

    throw new HttpError("Failed to create order", response);
  }

  /**
   * @throws {HttpError | import('ofetch').FetchError} if the request failed
   */
  async getOrder(orderId: string): Promise<{ Doc: { Order: Order[] } }> {
    const response = await this.get(`/order/${orderId}`);

    // API falsely returns 201 when the order is found
    if (response.statusCode == 201) return response.body as { Doc: { Order: Order[] } };

    throw new HttpError("Failed to fetch order", response);
  }

  /**
   * @throws {HttpError | import('ofetch').FetchError} if the request failed
   */
  async cancelOrder(orderId: string): Promise<{ Doc: { Order: Order[] } }> {
    const response = await this.put(`/order/${orderId}/cancel`, {
      query: { modus: "echo" }
    });

    if (response.statusCode == 200) return response.body as { Doc: { Order: Order[] } };

    throw new HttpError("Failed to cancel order", response);
  }

  /**
   * @throws {HttpError | import('ofetch').FetchError} if the request failed
   */
  async getOrderStates(orderId: string): Promise<{ Order: Order }> {
    const response = await this.get(`/order/${orderId}/states`);

    if (response.statusCode == 200) return response.body as { Order: Order };

    throw new HttpError("Failed to fetch order states", response);
  }
}

export default OrderClient;
