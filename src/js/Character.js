class Character {
  constructor(name, type) {
    this.stonedValue = false;
  }

  set distance(val) {
    this.distanceValue = val;
  }

  set attack(val) {
    this.baseAttack = val-10*(this.distanceValue-1);
  }
  
   get attack() {
    return this.stonedValue ? this.baseAttack-Math.log2(this.distanceValue) * 5 : this.baseAttack;
  }

  set stoned(val) {
    this.stonedValue = val;
  }
  
  get stoned() {
    return this.stonedValue; 
  }



}

export default Character;


