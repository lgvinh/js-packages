import { QueryParams } from '../dtos/query.params';
import { Result } from '../util-types/result';

export interface ApiOptions {
  headers: Record<string, string>;
  timeOut: number;
}
export interface ApiRequest {
  body: unknown;
  options?: ApiOptions;
}

export interface IRestApiClient {
  post(request: ApiRequest): Promise<Result<unknown>>;
  put(id: string, request: ApiRequest): Promise<Result<unknown>>;
  patch(id: string, request: ApiRequest): Promise<Result<unknown>>;
  findById(id: string, options?: ApiOptions): Promise<Result<unknown>>;
  find(query: QueryParams, options?: ApiOptions): Promise<Result<unknown[]>>;
  deleteById(id: string, option?: ApiOptions): Promise<Result<unknown>>;
}
