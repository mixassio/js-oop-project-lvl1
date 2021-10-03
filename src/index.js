// @ts-check

import StringValidator from './StringValidator.js';

export default class Validator {
  // obj = null;
  string() {
    return new StringValidator();
  }
}
