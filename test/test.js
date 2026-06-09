// test/app.test.js
const { sumar, restar } = require('../src/app');

describe('Operaciones matemáticas', () => {

  test('suma correctamente 2 + 3', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('suma números negativos', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });

  test('resta correctamente 10 - 4', () => {
    expect(restar(10, 4)).toBe(6);
  });

  test('resta con resultado negativo', () => {
    expect(restar(3, 10)).toBe(-7);
  });

});
