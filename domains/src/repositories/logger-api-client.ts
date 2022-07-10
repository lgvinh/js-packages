export interface ILoggerApiClient {
  debug(message: string, obj: object, ...args: any[]): void;
  info(message: string, obj: object, ...args: any[]): void;
  trace(message: string, obj: object, ...args: any[]): void;
  warn(message: string, obj: object, ...args: any[]): void;
  error(message: string, obj: object, ...args: any[]): void;
}
