const myFizzBuzz = require('./myFizzBuzz');

describe('Requirement 3: check myFizzBuzz function', () => {
  it('3.1 Check if myFizzBuzz(15) works as expected', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('3.2 CHeck if myFizzBuzz(9) works as expected', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('3.3 CHeck if myFizzBuzz(10) works as expected', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('3.4 CHeck if myFizzBuzz(13) works as expected', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  it('3.5 CHeck if myFizzBuzz("a") works as expected', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});
