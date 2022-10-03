const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const busca = species.filter((specie) => ids.includes(specie.id));
  return busca;
}
module.exports = getSpeciesByIds;
