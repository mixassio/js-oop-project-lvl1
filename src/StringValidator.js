export default class StringValidator {
  constructor(param) {
    this.listCustomValidator = param.listCustomValidator;
  }

  required() {
    this.req = true;
    return this;
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
    return this.checRequired(str) && typeof str === 'string' && this.checkMinLength(str) && this.checkContains(str) && this.checkTest(str);
  }

  test(title, param) {
    this.testFn = this.listCustomValidator.string[title];
    this.paramTest = param;
    return this;
  }

  checkTest(str) {
    return this.testFn === undefined ? true : this.testFn(str, this.paramTest);
  }
}
