import { GuardAgainstBasic } from '../bases';

class AgainstStringLength extends GuardAgainstBasic {
  private readonly text: string;
  private readonly maxLength?: number;
  private readonly minLength?: number;

  constructor({
    text,
    maxLength,
    minLength,
  }: {
    text: string;
    maxLength?: number;
    minLength?: number;
  }) {
    super();
    this.text = text;
    this.maxLength = maxLength;
    this.minLength = minLength;

    if (!this.minLength || !this.maxLength) {
      throw new Error(
        `[Constructor error]: Need at at least 1 parameter in minLength/maxLength`,
      );
    }
  }

  handle() {
    if (this.minLength && this.text.length < this.minLength) {
      throw new Error(
        `[Validation error]: Text's minimum length is ${this.minLength}, current text's length: ${this.text.length}`,
      );
    }

    if (this.maxLength && this.text.length > this.maxLength) {
      throw new Error(
        `[Validation error]: Text's maximum length is ${this.maxLength}, current text's length: ${this.text.length}`,
      );
    }
  }
}

export { AgainstStringLength };
