import { Logger, pino, LoggerOptions, Level, PrettyOptions } from 'pino';

import config from '../../config/default.json';

const {
  pinoConfig,
  loggerSensitiveKeywords,
  loggerSensitiveKeywordReplacement,
} = config;

export class PinoInstanceBuilder {
  private readonly config: LoggerOptions = {
    ...pinoConfig,
    formatters: {
      log(logObject) {
        loggerSensitiveKeywords.forEach((keyword) => {
          if (logObject[keyword]) {
            logObject[keyword] = loggerSensitiveKeywordReplacement[keyword];
          }
        });
        return logObject;
      },
    },
  };

  constructor(config?: LoggerOptions) {
    if (config) {
      this.config = config;
    }
  }

  withCustomLevels(level: {
    [key in Level]?: number;
  }): PinoInstanceBuilder {
    this.config.customLevels = {
      ...this.config.customLevels,
      ...level,
    };

    return this;
  }

  withFormatters(formatters: {
    level?: (label: string, number: number) => object;
    bindings?: (bindings: pino.Bindings) => object;
    log?: (object: object) => object;
  }): PinoInstanceBuilder {
    this.config.formatters = {
      ...this.config.formatters,
      ...formatters,
    };

    return this;
  }

  withPrettierPrint(prettierOptions: PrettyOptions): PinoInstanceBuilder {
    let defaultOptions = {};

    if (typeof this.config.prettyPrint === 'object') {
      defaultOptions = {
        ...this.config.prettyPrint,
      };
    }

    this.config.prettyPrint = {
      ...defaultOptions,
      ...prettierOptions,
    };

    return this;
  }

  withUseCustomLevel(isUseOnlyCustomLevels: boolean): PinoInstanceBuilder {
    this.config.useOnlyCustomLevels = isUseOnlyCustomLevels;

    return this;
  }

  withName(name: string): PinoInstanceBuilder {
    this.config.name = name;

    return this;
  }

  withLevel(level: string): PinoInstanceBuilder {
    this.config.level = level;

    return this;
  }

  toConfig(): LoggerOptions {
    return this.config;
  }

  toInstance(): Logger {
    return pino(this.config);
  }
}
