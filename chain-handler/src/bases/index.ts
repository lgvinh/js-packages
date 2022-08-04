import { ILoggerApiClient } from 'domains';

interface IChainHandler<T> {
  setNext(handler: IChainHandler<T>): IChainHandler<T>;
  internalHandle(request: T): T | null;
  handle(request: T): T | null;
}

abstract class AbstractChainHandler<T> implements IChainHandler<T> {
  private nextHandler: IChainHandler<T>;
  private logger: ILoggerApiClient;
  private errorHandler?: (params: any) => any = null;

  constructor(logger: ILoggerApiClient, errorHandler?: (params: any) => any) {
    this.logger = logger;
    if (errorHandler) {
      this.errorHandler = errorHandler;
    }
  }

  public setNext(handler: IChainHandler<T>): IChainHandler<T> {
    this.nextHandler = handler;

    return handler;
  }

  public internalHandle(params: T): T {
    throw new Error(
      `internalHandle hasn't been implemented yet, params: ${params}`,
    );
  }

  public handle(request: T): T {
    try {
      this.logger.info(
        '- Handling internal handle with this input: ',
        JSON.stringify(request),
      );
      this.internalHandle(request);
    } catch (error) {
      this.logger.info(`${this.constructor.name} catches error`);
      this.logger.error('Catch error on internalHandle: ', error.message);

      if (!this.errorHandler) {
        this.logger.info('Ending handler...');
        throw new Error(error);
      }

      this.logger.info(
        'Moving to errorHandler with this input: ',
        JSON.stringify(request),
      );
      return this.errorHandler(request);
    } finally {
      this.logger.info('- Done handling internal handle');
    }

    if (this.nextHandler) {
      this.logger.info(
        '- Moving to the next handler: ',
        this.nextHandler.constructor.name,
      );
      return this.nextHandler.handle(request);
    }

    this.logger.info('- Ending handler...');

    return null;
  }
}

export { AbstractChainHandler, IChainHandler };
