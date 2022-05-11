const searchEmployee = require('./searchEmplyee');

describe('Test searchEmployee()', () => {
  it('Check if exists', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Check if it is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Check if searchEmployee("4678-2", firstName) returns "Paul"', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
  it('Check if searchEmployee("8579-6", "lastName") returns "Gates"', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });
  it('Check if searchEmployee("5569-4", "specialities") returns accordingly', () => {
    expect(searchEmployee('5569-4', 'specialities')).toEqual([
      'Frontend',
      'Redux',
      'React',
      'CSS',
    ]);
  });
  it('Check if detail parameter exists in "professionalBoard" object', () => {
    expect(() => {
      searchEmployee('5569-4', 'nationality');
    }).toThrowError(new Error('Informação indisponível'));
  });
  it('Check if id parameter exists in "professionalBoard" object', () => {
    expect(() => {
      searchEmployee('1111-4', 'firstName');
    }).toThrowError(new Error('ID não identificada'));
  });
});
