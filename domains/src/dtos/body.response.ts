export interface RestfulBodyResponse<T> {
  message?: string;
  data?: T;
  statusCode?: number;
}
