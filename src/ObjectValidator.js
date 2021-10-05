export default class ObjectValidator {
  shape(obj) {
    Object.entries(obj).map(([k, v]) => {
      this[k] = v;
      return null;
    });
  }

  checkShape(obj) {
    const checks = Object.entries(obj).map(([k, v]) => this[k].isValid(v));
    return !checks.includes(false);
  }

  isValid(obj) {
    return typeof obj === 'object' && this.checkShape(obj);
  }
}
