const data = require('../data/zoo_data');

function testParameter(scheduleTarget) {
  // retorna se a entrada é um animal, dia, ou indefinida
  if (scheduleTarget === undefined) {
    return 'indefinido';
  }
  const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  if (data.species.some((animal) => scheduleTarget.includes(animal.name)) === true) {
    return 'animal';
  }
  if (week.some((dia) => scheduleTarget.includes(dia)) === true) {
    return 'dia';
  }
  return 'indefinido';
}
function animalAvailability(scheduleTarget) {
  // retorna quais dias aquele animal esta disponível
  const busca = data.species.find((animal) => scheduleTarget.includes(animal.name));
  return busca.availability;
}

function animalAvailabilityDay(day) {
  // retorna quais animais estão disponíveis naquele dia
  const animals = [];
  data.species.forEach((element) => {
    if (element.availability.some((dia) => day.includes(dia)) === true) {
      animals.push(element.name);
    }
  });
  return animals;
}

function getDay(scheduleTarget) {
  // retorna os horários de funcionamento daquele dia
  if (scheduleTarget === 'Monday') {
    return 'CLOSED';
  }
  const { hours } = data;
  const indice = Object.keys(hours).indexOf(scheduleTarget);
  const horario = Object.entries(hours)[indice][1];
  const resultado = `Open from ${horario.open}am until ${horario.close}pm`;
  return resultado;
}
function getDaySchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const horario = getDay(scheduleTarget);
  const animais = animalAvailabilityDay(scheduleTarget);

  const result = {
    scheduleTarget: {
      officeHour: horario,
      exhibition: animais,
    },
  };

  result[scheduleTarget] = result.scheduleTarget;
  delete result.scheduleTarget;
  return result;
}

function getAlltSchedule() {
  const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  let resultado = {};
  week.forEach((element) => {
    resultado = { ...resultado, ...getDaySchedule(element) };
  });
  return resultado;
}
function getSchedule(scheduleTarget) {
  // retorna dias que o animal estará em exibição
  if (testParameter(scheduleTarget) === 'animal') {
    return animalAvailability(scheduleTarget);
  }
  if (testParameter(scheduleTarget) === 'dia') {
    return getDaySchedule(scheduleTarget);
  }
  if (testParameter(scheduleTarget) === 'indefinido') {
    getAlltSchedule();
  }
  return getAlltSchedule();
}

module.exports = getSchedule;
