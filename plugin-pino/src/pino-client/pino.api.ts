import { Logger } from 'pino';
import { ILoggerApiClient } from 'domains';

export class PinoApi implements ILoggerApiClient {
  constructor(protected readonly logger: Logger) {}

  debug(message: string, obj?: unknown, ...args: unknown[]): void {
    if (!obj) {
      return this.logger.debug(message);
    }

    return this.logger.debug(obj, message, args);
  }

  info(message: string, obj?: unknown, ...args: unknown[]): void {
    if (!obj) {
      return this.logger.info(message);
    }

    return this.logger.info(obj, message, args);
  }

  trace(message: string, obj?: unknown, ...args: unknown[]): void {
    if (!obj) {
      return this.logger.trace(message);
    }

    return this.logger.trace(obj, message, args);
  }

  warn(message: string, obj?: unknown, ...args: unknown[]): void {
    if (!obj) {
      return this.logger.warn(message);
    }

    return this.logger.warn(obj, message, args);
  }

  error(message: string, obj?: unknown, ...args: unknown[]): void {
    if (!obj) {
      return this.logger.error(message);
    }

    return this.logger.error(obj, message, args);
  }
}
