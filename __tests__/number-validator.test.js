import Validator from '../src/index.js';

describe('number', () => {
  it('without checks', () => {
    const validator = new Validator();
    const schema = validator.number();

    expect(schema.isValid(null)).toBeTruthy();
  });
  it('with required', () => {
    const validator = new Validator();
    const schema = validator.number();

    schema.required();

    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(7)).toBeTruthy();
    expect(schema.isValid(0)).toBeTruthy();
  });
  it('with positive', () => {
    const validator = new Validator();
    const schema = validator.number();

    schema.positive();
    schema.required();
    expect(schema.isValid(7)).toBeTruthy();
    expect(schema.isValid(0)).toBeFalsy();
    expect(schema.isValid(-4)).toBeFalsy();
  });
  it('with range', () => {
    const validator = new Validator();
    const schema = validator.number();

    schema.range(-5, 5);
    expect(schema.isValid(-3)).toBeTruthy();
    expect(schema.isValid(0)).toBeTruthy();
    expect(schema.isValid(-5)).toBeTruthy();
    expect(schema.isValid(5)).toBeTruthy();
    expect(schema.isValid(6)).toBeFalsy();
    expect(schema.isValid(-6)).toBeFalsy();
  });
});
