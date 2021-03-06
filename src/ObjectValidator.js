export default class ObjectValidator {
  constructor(param) {
    this.listCustomValidator = param.listCustomValidator;
  }

  shape(obj) {
    Object.entries(obj).map(([k, v]) => {
      this[k] = v;
      return null;
    });
  }

  checkShape(obj) {
    if (!obj || obj === {}) {
      return true;
    }
    const checks = Object.entries(obj).map(([k, v]) => this[k].isValid(v));
    return !checks.includes(false);
  }

  isValid(obj) {
    return typeof obj === 'object' && this.checkShape(obj);
  }
}
