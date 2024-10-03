import Character from "../Character";

describe('Проверка класса Character', () => {  
  
  test('Проверка установки силы атаки ', () => {
     let actorCheck = new Character('Magician', 'Magician');
     actorCheck.attack = 100;
     console.log(actorCheck.attack);
     expect(actorCheck.attack).toBe(100);
   });

   test('Проверка атаки на вторую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = 100;
    let result = actorCheck.makeAttack(2)
    console.log(result);
    expect(result).toBe(90);
  });

  test('Проверка атаки на четвертую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = 100;
    let result = actorCheck.makeAttack(4)
    console.log(result);
    expect(result).toBe(70);
  });

  test('Проверка атаки на вторую клетку c дурманом', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.attack = 100;
    let result = actorCheck.makeStoned(2)
    console.log(result);
    expect(result).toBe(85);
  });
  
}); 


