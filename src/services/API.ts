import { cookies } from "next/headers";

export interface APIError {
  statusCode: number;
  status: string;
  message: string;
  data: null;
  errors: any[];
}

class Api {
  async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const headers = new Headers();
    headers.append("Accept", "application/json");

    if (options.body instanceof FormData === false) {
      headers.append("Content-Type", "application/json");
    }

    const requestOptions: RequestInit = {
      mode: "cors",
      credentials: "include",
      ...options,
      headers
    };

    try {
      const response: Response = await fetch(path, requestOptions);
      const res: T = await response.json();

      if (!response.ok) {
        return Promise.reject(res);
      }

      return res;
    } catch (error: any) {
      console.error(error.stack);
      return Promise.reject({
        ...error,
        message: error.message
      });
    }
  }

  get<T>(path: string): Promise<T> {
    return this.request(path);
  }

  put<T>(path: string, body: object): Promise<T> {
    return this.request(path, { method: "PUT", body: JSON.stringify(body) });
  }

  remove<T>(path: string, body: any): Promise<T> {
    return this.request(path, { method: "DELETE", body: JSON.stringify(body) });
  }

  post<T, B>(path: string, body: B): Promise<T> {
    return this.request(path, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body)
    });
  }
}

const API = new Api();

export default API;
