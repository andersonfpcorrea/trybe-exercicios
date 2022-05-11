function techList(array, name) {
  const allTech = [];
  if (array.length === 0) return `Vazio!`;
  else
    for (let key in array) {
      let iteratorObj = {
        tech: `${array[key]}`,
        name: name,
      };
      allTech.push(iteratorObj);
    }
  return allTech.sort(function (a, b) {
    const techA = a.tech.toUpperCase();
    const techB = b.tech.toUpperCase();
    if (techA < techB) {
      return -1;
    }
    if (techA > techB) {
      return 1;
    }
    return 0;
  });
}

module.exports = techList;
