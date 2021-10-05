import Validator from '../src/index.js';

describe('array', () => {
  it('without checks', () => {
    const validator = new Validator();
    const schema = validator.array();

    expect(schema.isValid(null)).toBeFalsy();
  });
  it('with required', () => {
    const validator = new Validator();
    const schema = validator.array();

    expect(schema.isValid(null)).toBeFalsy();

    schema.required();

    expect(schema.isValid([])).toBeTruthy();
    expect(schema.isValid(['hexlet'])).toBeTruthy();

    schema.sizeof(2);

    expect(schema.isValid(['hexlet'])).toBeFalsy();
    expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy();
  });
});
