import {
  // loggerSensitiveKeywordReplacement,
  // loggerSensitiveKeywords,
  pinoConfig,
} from '../../config/default.json';
import { PinoInstanceBuilder } from '../pino-client';

describe('pino logger', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create instance successfully with default config', () => {
    const config = new PinoInstanceBuilder().toConfig();

    expect(config.customLevels).toStrictEqual(pinoConfig.customLevels);
    expect(config.level).toEqual(pinoConfig.level);
    expect(config.name).toEqual(pinoConfig.name);
    expect(config.useOnlyCustomLevels).toEqual(pinoConfig.useOnlyCustomLevels);
  });

  it('should change name successfully', () => {
    const newName = 'test';

    const config = new PinoInstanceBuilder().withName(newName).toConfig();

    expect(config.name).toEqual(newName);
  });

  it('should change level successfully', () => {
    const newLevel = 'debug';

    const config = new PinoInstanceBuilder().withLevel(newLevel).toConfig();

    expect(config.level).toEqual(newLevel);
  });

  it('should change use custom level successfully', () => {
    const newUseCustomLevel = true;

    const config = new PinoInstanceBuilder()
      .withUseCustomLevel(newUseCustomLevel)
      .toConfig();

    expect(config.useOnlyCustomLevels).toEqual(newUseCustomLevel);
  });

  it('should change custom levels successfully', () => {
    const newCustomLevels = {
      trace: 10,
      debug: 20,
      info: 30,
      warn: 40,
      error: 50,
      fatal: 60,
    };

    const config = new PinoInstanceBuilder()
      .withCustomLevels(newCustomLevels)
      .toConfig();

    expect(config.customLevels).toEqual(newCustomLevels);
  });
});
