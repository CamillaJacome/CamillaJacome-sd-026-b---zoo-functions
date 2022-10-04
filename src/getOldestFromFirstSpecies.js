const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const buscaId = data.employees.find((p) => id === p.id);
  const { responsibleFor } = buscaId;
  const buscaAnimal = data.species.find((p) => responsibleFor[0] === p.id);
  const { residents } = buscaAnimal;
  let animalMaisVelho = [];
  let idade = 0;
  residents.forEach((element) => {
    if (idade < element.age) {
      idade = element.age;
      animalMaisVelho = element;
    }
  });
  const { name } = animalMaisVelho;
  const { age } = animalMaisVelho;
  const { sex } = animalMaisVelho;
  const resultado = [];
  resultado.push(name, sex, age);
  return resultado;
}
module.exports = getOldestFromFirstSpecies;
