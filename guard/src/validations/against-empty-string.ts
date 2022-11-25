import { GuardAgainstBasic } from '../bases';

class AgainstEmptyString extends GuardAgainstBasic {
  private readonly text: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  handle() {
    if (!this.text.length) {
      throw new Error("[Validation error]: Text doesn't allowed to be empty");
    }
  }
}

export { AgainstEmptyString };
