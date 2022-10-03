const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const busca = data.species.find((bicho) => bicho.name === animal);
  const idade = busca.residents.every((bicho) => bicho.age >= age);
  return idade;
}

module.exports = getAnimalsOlderThan;
