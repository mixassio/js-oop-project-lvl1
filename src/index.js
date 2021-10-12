// @ts-check

import NumberValidator from './NumberValidator.js';
import ArrayValidator from './ArrayValidator.js';
import ObjectValidator from './ObjectValidator.js';
import StringValidator from './StringValidator.js';

export default class Validator {
  // listCustomValidator = {
  //   string: {},
  //   number: {},
  // };
  constructor() {
    this.listCustomValidator = {
      string: {},
      number: {},
    };
  }

  string() {
    return new StringValidator(this);
  }

  number() {
    return new NumberValidator(this);
  }

  array() {
    return new ArrayValidator();
  }

  object() {
    return new ObjectValidator();
  }

  addValidator(type, title, fn) {
    this.listCustomValidator[type][title] = fn;
    return this;
  }

  test(title, params) {}
}
