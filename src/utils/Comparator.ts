export class Comparator {
  private compare: Function;

  constructor(compareFunction?: Function) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(a: string | number, b: string | number) {
    if (a === b) {
      return 0;
    } else {
      return a < b ? -1 : 1;
    }
  }

  equal(a: string | number, b: string | number) {
    return this.compare(a, b) === 0;
  }

  lessThan(a: string | number, b: string | number) {
    return this.compare(a, b) < 0;
  }

  greaterThan(a: string | number, b: string | number) {
    return this.compare(a, b) > 0;
  }

  lessThanOrEqual(a: string | number, b: string | number) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a: string | number, b: string | number) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a: string | number, b: string | number) =>
      compareOriginal(b, a);
  }
}

export default Comparator;
