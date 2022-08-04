export interface ILoggerApiClient {
  debug(message: string, obj?: unknown, ...args: unknown[]): void;
  info(message: string, obj?: unknown, ...args: unknown[]): void;
  trace(message: string, obj?: unknown, ...args: unknown[]): void;
  warn(message: string, obj?: unknown, ...args: unknown[]): void;
  error(message: string, obj?: unknown, ...args: unknown[]): void;
}
