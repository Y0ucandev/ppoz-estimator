import { notImplemented } from '../common/not-implemented';

export class Money {
  private constructor(readonly grosze: number) {}

  static fromGrosze(grosze: number): Money {
    if (!Number.isSafeInteger(grosze)) {
      throw new Error(`Money must be an integer amount of grosze, got: ${grosze}`);
    }

    return new Money(grosze);
  }

  static zero(): Money {
    return new Money(0);
  }

  static fromZloty(zloty: number): Money {
    return notImplemented('Money.fromZloty', 3);
  }

  static sum(amounts: Money[]): Money {
    return notImplemented('Money.sum', 3);
  }

  add(other: Money): Money {
    return notImplemented('Money.add', 3);
  }

  subtract(other: Money): Money {
    return notImplemented('Money.subtract', 3);
  }

  multiply(factor: number): Money {
    return notImplemented('Money.multiply', 3);
  }

  percentage(rate: number): Money {
    return notImplemented('Money.percentage', 3);
  }

  equals(other: Money): boolean {
    return this.grosze === other.grosze;
  }

  toZloty(): number {
    return this.grosze / 100;
  }
}
