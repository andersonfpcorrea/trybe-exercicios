const decode = require('./decode');

describe('Requirement 4: test decode()', () => {
  it('4.1 Check if decode() is a function', () => {
    expect(typeof decode).toBe('function');
  });
  it('4.2 Check if decode(12345) returns "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('4.3 Check if decode(67890) returns "67890"', () => {
    expect(decode('67890')).toBe('67890');
  });
  it('4.4 Check if the returned string has the same lenght as the parameter', () => {
    const str = '67890';
    expect(str.length).toBe(decode('67890').length);
  });
});
