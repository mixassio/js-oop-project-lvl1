import Validator from '../src/index.js';

describe('custom fn', () => {
  it('string', () => {
    const validator = new Validator();

    const fn = (value, start) => value.startsWith(start);

    validator.addValidator('string', 'startWith', fn);

    const schema = validator.string().test('startWith', 'H');

    expect(schema.isValid('Hexlet')).toBeTruthy();
    expect(schema.isValid('exlet')).toBeFalsy();
  });

  it('number', () => {
    const validator = new Validator();

    const fn = (value, min) => value >= min;

    validator.addValidator('number', 'min', fn);

    const schema = validator.number().test('min', 5);

    expect(schema.isValid(6)).toBeTruthy();
    expect(schema.isValid(4)).toBeFalsy();
  });
});
