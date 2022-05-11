function encode(string) {
  let newString;
  newString = string.replaceAll('a', '1');
  newString = newString.replaceAll('e', '2');
  newString = newString.replaceAll('i', '3');
  newString = newString.replaceAll('o', '4');
  newString = newString.replaceAll('u', '5');
  return newString;
}

module.exports = encode;
