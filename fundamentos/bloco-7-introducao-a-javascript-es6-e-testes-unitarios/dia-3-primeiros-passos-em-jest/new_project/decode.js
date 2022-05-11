function decode(string) {
  let newString;
  newString = string.replaceAll('1', 'a');
  newString = newString.replaceAll('2', 'e');
  newString = newString.replaceAll('3', 'i');
  newString = newString.replaceAll('4', 'o');
  newString = newString.replaceAll('5', 'u');
  return newString;
}

module.exports = decode;
