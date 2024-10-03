class Character {
  constructor(name, type) {
  }

  set attack(val) {
    this.attackValue = val;
  }

  get attack() {
    return this.attackValue;
  }

  set stoned(val) {
    this.stonedValue = val;
  }

  get stoned() {
    return this.stonedValue;
  }


  makeAttack(dis) {
   return this.attackValue-10*(dis-1);
  }


  makeStoned(dis) {
    return this.makeAttack(dis)- Math.log2(dis) * 5;
   }
 

}

export default Character;


