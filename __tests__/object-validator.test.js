import Validator from '../src/index.js';

describe('object', () => {
  it('without checks', () => {
    const validator = new Validator();
    const schema = validator.object();
    schema.shape({
      name: validator.string().required(),
      age: validator.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy(); // true
    expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy(); // true
    expect(schema.isValid({ name: '', age: null })).toBeFalsy(); // false
    expect(schema.isValid({ name: 'ada', age: -5 })).toBeFalsy(); // false
  });
});
