import { RestfulBodyResponse } from '../dtos/body.response';
export class RestfulResponseBuilder<T> {
  constructor(private readonly bodyResponse?: RestfulBodyResponse<T>) {}

  withStatusCode(value: number): RestfulResponseBuilder<T> {
    const bodyResponse: RestfulBodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: value,
      message: this.bodyResponse?.message ?? '',
    };
    return new RestfulResponseBuilder<T>(bodyResponse);
  }

  withMessage(value: string): RestfulResponseBuilder<T> {
    const bodyResponse: RestfulBodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: this.bodyResponse?.statusCode ?? 200,
      message: value,
    };
    return new RestfulResponseBuilder<T>(bodyResponse);
  }

  withData(value: any): RestfulResponseBuilder<T> {
    const bodyResponse: RestfulBodyResponse<T> = {
      data: value,
      statusCode: this.bodyResponse?.statusCode ?? 200,
      message: this.bodyResponse?.message ?? '',
    };
    return new RestfulResponseBuilder<T>(bodyResponse);
  }

  onSuccess(statusCode: number) {
    const bodyResponse: RestfulBodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: statusCode ?? 200,
      message: this.bodyResponse?.message ?? '',
    };
    return new RestfulResponseBuilder<T>(bodyResponse);
  }

  onError(statusCode: number) {
    const bodyResponse: RestfulBodyResponse<T> = {
      data: this.bodyResponse?.data ?? null,
      statusCode: statusCode ?? 500,
      message: this.bodyResponse?.message ?? '',
    };
    return new RestfulResponseBuilder<T>(bodyResponse);
  }

  toJson() {
    const { statusCode, message, data } = this.bodyResponse;
    if (data) {
      return {
        message: message ?? 'Execute successfully',
        data: data,
        statusCode,
      };
    }
    return {
      message: message ?? 'Execute successfully',
      statusCode,
    };
  }
}
