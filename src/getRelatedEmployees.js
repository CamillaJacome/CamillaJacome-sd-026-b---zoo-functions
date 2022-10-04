const { employees } = require('../data/zoo_data');

const e = employees;
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const b = e.some((p) => id.includes(p.managers && p.managers[0]) && p.managers.length > 0);
  if (b === false) {
    const b2 = e.some((p) => (id.includes(p.managers[1])) && p.managers.length > 0);
    return b2;
  }
  return b;
}
function managerIncludes(managerId) {
  const result = [];
  e.forEach((element) => {
    if (managerId.includes(element.managers) && element.managers.length !== 0) {
      result.push(`${element.firstName} ${element.lastName}`);
    }
  });
  return result;
}

function getRelatedEmployees(managerId) {
  let result = [];
  if (isManager(managerId) === true) {
    result = managerIncludes(managerId);
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return result;
}

module.exports = { isManager, getRelatedEmployees };
