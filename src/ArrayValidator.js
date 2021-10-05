export default class ArrayValidator {
  required() {
    this.req = true;
  }

  checRequired(arr) {
    return this.req === undefined ? true : this.req && (Boolean(arr) || arr === 0);
  }

  sizeof(count) {
    this.count = count;
    return this;
  }

  checkSizeof(arr) {
    return this.count === undefined ? true : this.count === arr.length;
  }

  isValid(arr) {
    return this.checRequired(arr) && Array.isArray(arr) && this.checkSizeof(arr);
  }
}
