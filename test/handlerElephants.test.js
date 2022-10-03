const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica numero de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica nomes de elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica nomes de elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica media de idade', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica popularidade', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Verifica dias de visita', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Retorna undefined caso não exista argumento', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
});
