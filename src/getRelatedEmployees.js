// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  // const busca = employees.some((p) => (id.includes(p.managers) || id.includes(p.managers[1])) && p.managers.length > 0);
  // return busca;
}

function getRelatedEmployees(managerId) {

}
console.log(isManager(stephanieId));
console.log(isManager(olaId));
module.exports = { isManager, getRelatedEmployees };
