import { QueryParams } from "../dtos/query.params";
import { Result } from "../util-types/result";

export interface ApiOptions {
  headers: Record<string, string>;
  timeOut: number;
}
export interface ApiRequest {
  body: any;
  options?: ApiOptions;
}

export interface IRestApiClient {
  post(request: ApiRequest): Promise<Result<any>>;
  put(id: string, request: ApiRequest): Promise<Result<any>>;
  patch(id: string, request: ApiRequest): Promise<Result<any>>;
  findById(id: string, options?: ApiOptions): Promise<Result<any>>;
  find(query: QueryParams, options?: ApiOptions): Promise<Result<any[]>>;
  deleteById(id: string, option?: ApiOptions): Promise<Result<any>>;
}
