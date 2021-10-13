export default class NumberValidator {
  constructor(param) {
    this.listCustomValidator = param.listCustomValidator;
  }

  required() {
    this.req = true;
  }

  checRequired(num) {
    return this.req === undefined ? true : this.req && (Boolean(num) || num === 0);
  }

  positive() {
    this.positiv = true;
    return this;
  }

  checkPositive(num) {
    return this.positiv === undefined ? true : this.positiv && (num > 0 || num === null);
  }

  range(min, max) {
    this.min = min;
    this.max = max;
    return this;
  }

  checkRange(num) {
    return this.min === undefined ? true : num >= this.min && num <= this.max;
  }

  isValid(num) {
    return this.checRequired(num) && (typeof num === 'number' || num === null) && this.checkPositive(num) && this.checkRange(num) && this.checkTest(num);
  }

  test(title, param) {
    this.testFn = this.listCustomValidator.number[title];
    this.paramTest = param;
    return this;
  }

  checkTest(str) {
    return this.testFn === undefined ? true : this.testFn(str, this.paramTest);
  }
}
