class Character {
  constructor(name, type) {
    this.stonedValue = false;
  }
  
   get attack() {
    let baseAtack = this.strength-10*(this.distance-1);
    return this.stonedValue ? baseAtack-Math.log2(this.distance) * 5 : baseAtack;
  }

  set stoned(val) {
    this.stonedValue = val;
  }
  
  get stoned() {
    return this.stonedValue; 
  }



}

export default Character;


