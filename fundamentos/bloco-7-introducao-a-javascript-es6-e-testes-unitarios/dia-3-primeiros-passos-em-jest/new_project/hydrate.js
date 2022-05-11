function hydrate(string) {
  const a = string.match(/\d/g);
  let counter = 0;
  for (let key in a) {
    counter += Number(a[key]);
  }
  return counter === 1 ? `1 copo de água` : `${counter} copos de água`;
}

module.exports = hydrate;
