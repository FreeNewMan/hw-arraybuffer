import Character from "../Character";

describe('Проверка класса Character', () => {  
  
  test('Проверка установки силы атаки ', () => {
     let actorCheck = new Character('Magician', 'Magician');
     actorCheck.attackValue = 100;
     console.log(actorCheck.attackValue);
     expect(actorCheck.attackValue).toBe(100);
   });

   test('Проверка атаки на вторую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attackValue = 100;
    let result = actorCheck.attack(2);

    console.log(result);
    expect(result).toBe(90);
  });

  test('Проверка атаки на четвертую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attackValue = 100;
    let result = actorCheck.attack(4);
    expect(result).toBe(70);
  });

  test('Проверка атаки на вторую клетку c дурманом', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attackValue = 100;
    let result = actorCheck.makeStoned(2);
    expect(result).toBe(85);
  });
  
}); 


