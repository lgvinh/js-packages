import { GuardAgainstBasic } from '../bases';

class AgainstStringLength extends GuardAgainstBasic {
  private readonly text: string;
  private readonly maxLength: number;
  private readonly minLength: number;

  constructor({
    text,
    maxLength,
    minLength,
  }: {
    text: string;
    maxLength: number;
    minLength: number;
  }) {
    super();
    this.text = text;
    this.maxLength = maxLength;
    this.minLength = minLength;
  }

  handle() {
    if (this.text.length < this.minLength) {
      throw new Error(
        `[Validation error]: Text's minimum length is ${this.minLength}, current text's length: ${this.text.length}`,
      );
    }

    if (this.text.length > this.maxLength) {
      throw new Error(
        `[Validation error]: Text's maximum length is ${this.maxLength}, current text's length: ${this.text.length}`,
      );
    }
  }
}

export { AgainstStringLength };
