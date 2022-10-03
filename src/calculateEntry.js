const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const visitantes = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitantes.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      visitantes.adult += 1;
    }
    if (element.age >= 50) {
      visitantes.senior += 1;
    }
  });
  return visitantes;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    console.log(entrants);
    return 0;
  }
  const num = countEntrants(entrants);
  const child = num.child * data.prices.child;
  const adult = num.adult * data.prices.adult;
  const senior = num.senior * data.prices.senior;

  return child + adult + senior;
}
// console.log(countEntrants(pessoas));
// console.log(isEmpty());
console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
