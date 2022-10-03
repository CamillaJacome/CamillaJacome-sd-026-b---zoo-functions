const data = require('../data/zoo_data');

function testParameter(scheduleTarget) {
  const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  if (data.species.some((animal) => scheduleTarget.includes(animal.name)) === true) {
    return 'animal';
  }
  if (week.some((dia) => scheduleTarget.includes(dia)) === true) {
    return 'dia';
  }
  if (scheduleTarget === undefined) {
    return 'indefinido';
  }
  return 'indefinido';
}
function animalAvailability(scheduleTarget) {
  const busca = data.species.find((animal) => scheduleTarget.includes(animal.name));
  return busca.availability;
}

function animalDay(scheduleTarget) {
  const animais = [];
  data.species.forEach((element) => {
    const busca = element.availability.some((animal) => animal === scheduleTarget);
    if (busca === true) {
      animais.push(element.name);
    }
  });
  return animais;
}

/* function animalSchedule(scheduleTarget) {
  if (testParameter(scheduleTarget) === 'animal') {
    return animalAvailability(scheduleTarget);
  }
} */
function getDay(scheduleTarget) {
  const horas = data.hours;
  console.log(Object.keys(horas));
}
function getSchedule(scheduleTarget) {
  // seu código aqui
  if (testParameter(scheduleTarget) === 'animal') {
    return animalAvailability(scheduleTarget);
  }
}
// console.log(animalSchedule('lions'));
console.log(getSchedule('lions'));
console.log(testParameter('Friday'));
console.log(animalDay('Friday'));
getDay(' ');

module.exports = getSchedule;
