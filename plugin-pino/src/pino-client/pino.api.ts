import { Logger } from 'pino';
import { ILoggerApiClient } from 'domains';

export class PinoApi implements ILoggerApiClient {
  constructor(protected readonly logger: Logger) {}

  debug(message: string, obj: object, ...args: any[]): void {
    return this.logger.debug(obj, message, args);
  }

  info(message: string, obj: object, ...args: any[]): void {
    return this.logger.info(obj, message, args);
  }

  trace(message: string, obj: object, ...args: any[]): void {
    return this.logger.trace(obj, message, args);
  }

  warn(message: string, obj: object, ...args: any[]): void {
    return this.logger.warn(obj, message, args);
  }

  error(message: string, obj: object, ...args: any[]): void {
    return this.logger.error(obj, message, args);
  }
}
