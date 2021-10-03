// @ts-check

import StringValidator from './StringValidator.js';
import NumberValidator from './NumberValidator.js';

export default class Validator {
  // obj = null;
  string() {
    return new StringValidator();
  }

  number() {
    return new NumberValidator();
  }
}
