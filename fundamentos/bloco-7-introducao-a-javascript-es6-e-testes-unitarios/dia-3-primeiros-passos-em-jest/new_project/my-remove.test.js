const myRemove = require('./my-remove');

describe('Requirement 2: check myRemove()', () => {
  test('2.1 Check if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('2.2 Check if myRemove([1, 2, 3, 4], 3) does not returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('2.3 Check if myRemove([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
