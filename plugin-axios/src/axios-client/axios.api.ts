import { AxiosInstance } from 'axios';
import {
  ApiOptions,
  ApiRequest,
  IRestApiClient,
  QueryParams,
  Result,
} from 'domains';

export class AxiosApi implements IRestApiClient {
  protected url: string;
  constructor(
    protected readonly source: string,
    protected readonly axios: AxiosInstance,
  ) {
    this.url = `${this.axios.defaults.baseURL}/${this.source}`;
  }

  async post(request: ApiRequest): Promise<Result<unknown>> {
    try {
      const { options, body } = request;
      const jsonResponse = await this.axios.post(this.url, body, options);
      const response = jsonResponse.data as unknown;
      return Result.ok(response);
    } catch (error) {
      return Result.fail(error);
    }
  }
  async put(id: string, request: ApiRequest): Promise<Result<unknown>> {
    try {
      const url = `${this.url}/${id}`;
      const { options, body } = request;
      const jsonResponse = await this.axios.put(url, body, options);
      const response = jsonResponse.data as unknown;
      return Result.ok(response);
    } catch (error) {
      return Result.fail(error);
    }
  }
  async patch(id: string, request: ApiRequest): Promise<Result<unknown>> {
    try {
      const url = `${this.url}/${id}`;
      const { options, body } = request;
      const jsonResponse = await this.axios.put(url, body, options);
      const response = jsonResponse.data as unknown;
      return Result.ok(response);
    } catch (error) {
      return Result.fail(error);
    }
  }

  async findById(id: string, options?: ApiOptions): Promise<Result<unknown>> {
    try {
      const url = `${this.url}/${id}`;
      const jsonResponse = await this.axios.get(url, options);
      const response = jsonResponse.data as unknown;
      return Result.ok(response);
    } catch (error) {
      return Result.fail(error);
    }
  }

  async find(
    query: QueryParams,
    options?: ApiOptions,
  ): Promise<Result<unknown[]>> {
    try {
      const jsonResponse = await this.axios.get(this.url, {
        ...options,
        params: {
          ...query,
        },
      });
      const response = jsonResponse.data as unknown[];
      return Result.ok(response);
    } catch (error) {
      return Result.fail(error);
    }
  }

  async deleteById(id: string, option?: ApiOptions): Promise<Result<unknown>> {
    try {
      const url = `${this.url}/${id}`;
      const jsonResponse = await this.axios.delete(url, option);
      const response = jsonResponse.data as unknown;
      return Result.ok(response);
    } catch (error) {
      return Result.fail(error);
    }
  }
}
