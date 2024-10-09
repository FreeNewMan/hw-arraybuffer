class Character {
  constructor(name, type) {
    this.stonedValue = false;
  }

  set distance(val) {
    this.distanceValue = val;
  }

  set attack(val) {
    this.baseAttack = val;
  }
  
   get attack() {
    const  baseAtt = this.baseAttack-10*(this.distanceValue-1);
    return this.stonedValue ? baseAtt-Math.log2(this.distanceValue) * 5 : baseAtt;
  }

  set stoned(val) {
    this.stonedValue = val;
  }
  
  get stoned() {
    return this.stonedValue; 
  }



}

export default Character;


