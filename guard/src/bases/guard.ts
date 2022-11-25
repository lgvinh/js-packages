import { GuardAgainstBasic } from '.';

class Guard {
  against(sth: GuardAgainstBasic) {
    sth.handle();

    return this;
  }
}

export { Guard };
