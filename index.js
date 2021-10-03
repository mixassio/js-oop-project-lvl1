import Validator from './src/index.js';

const v = new Validator();
const schema = v.string();

console.log(schema.isValid(''));

schema.required();

console.log(schema.isValid('what does the fox say'));
console.log(schema.isValid('hexlet'));
console.log(schema.isValid(null));
console.log(schema.isValid(''));

schema.minLength(7);
console.log(schema.isValid('hexlet'));
console.log(schema.isValid('what does the fox say'));

console.log(schema.contains('what').isValid('what does the fox say')); // true
console.log(schema.contains('whatthe').isValid('what does the fox say')); // false
