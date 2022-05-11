const encode = require('./encode');

describe('Requirement 4: test encode()', () => {
  it('4.1 Check if encode() is a function', () => {
    expect(typeof encode).toBe('function');
  });
  it('4.2 Check if encode("aeiou") returns "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('4.3 Check if encode("bcdfg") returns "bcdfg"', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
  });
  it('4.4 Check if the returned string has the same lenght as the parameter', () => {
    const str = 'bcdfg';
    expect(str.length).toBe(encode('bcdfg').length);
  });
});
