import Character from "../Character";

describe('Проверка класса Character', () => {  
  

   test('Проверка атаки на вторую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.distance = 2;
    actorCheck.attack = 100;
    let result = actorCheck.attack;
    expect(result).toBe(90);
  });

  test('Проверка атаки на четвертую клетку ', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.distance = 4;
    actorCheck.attack = 100;
    let result = actorCheck.attack;
    expect(result).toBe(70);
  });

  test('Проверка атаки на вторую клетку c дурманом', () => {
    let actorCheck = new Character('Magician', 'Magician');
    actorCheck.distance = 2;
    actorCheck.attack = 100;
    actorCheck.stoned = true;
    let result = actorCheck.attack;
    expect(result).toBe(85);
  });
  
}); 


