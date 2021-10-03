export default class StringValidator {
  required() {
    this.req = true;
  }

  checRequired(str) {
    return this.req === undefined ? true : this.req && Boolean(str);
  }

  minLength(count) {
    this.count = count;
  }

  checkMinLength(str) {
    return this.count === undefined ? true : str.length >= this.count;
  }

  contains(contain) {
    this.contain = contain;
    return this;
  }

  checkContains(str) {
    return this.contain === undefined ? true : str.includes(this.contain);
  }

  isValid(str) {
    return this.checRequired(str) && typeof str === 'string' && this.checkMinLength(str) && this.checkContains(str);
  }
}
