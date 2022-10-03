const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animais = {};
    data.species.forEach((element) => {
      const busca = data.species.find((a) => a.name === element.name);
      animais[element.name] = busca.residents.length;
    });
    return animais;
  }
  if (Object.keys(animal).length === 1) {
    const busca = data.species.find((a) => a.name === animal.specie);
    return busca.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const busca = data.species.find((a) => a.name === animal.specie);
    const busca2 = busca.residents.filter((a) => a.sex === animal.sex);
    return busca2.length;
  }
}
console.log(countAnimals());
module.exports = countAnimals;
