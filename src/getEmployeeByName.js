const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const vazio = {};
  if (employeeName === undefined) {
    return vazio;
  }
  const b = data.employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
  return b;
}
module.exports = getEmployeeByName;
