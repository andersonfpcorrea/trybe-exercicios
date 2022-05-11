const sum = require('./sum');

describe('Requirement 1: check if sum(a,b) returns a + b', () => {
  test('1.1 Check if sum(4,5) retuns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('1.2 Check if sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('1.3 Check if sum() throws an error if 4 and "5" are used as parameters', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  test('1.4 Check if sum(4, "5") throws "parameters must be numbers" as error message', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
