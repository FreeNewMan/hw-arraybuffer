import Character from "../Character";

describe('Проверка класса Character', () => {  
  
  test('Проверка установки параметров атаки ', () => {
     let actorCheck = new Character('Magician', 'Magician');
     actorCheck.attack = {strength: 100, distance: 1};
     expect([actorCheck.strength, actorCheck.distance]).toEqual([100,1]);
   });

   test('Проверка атаки на вторую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = {strength: 100, distance: 2};
    let result = actorCheck.attack;
    expect(result).toBe(90);
  });

  test('Проверка атаки на четвертую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = {strength: 100, distance: 4};
    let result = actorCheck.attack;
    expect(result).toBe(70);
  });

  test('Проверка атаки на вторую клетку c дурманом', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = {strength: 100, distance: 2};
    let result = actorCheck.stoned;
    expect(result).toBe(85);
  });
  
}); 


