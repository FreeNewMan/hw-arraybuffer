class Character {
  constructor(name, type) {
  }
  
  set attack(args) { 
    this.strength = args.strength;
    this.distance = args.distance;
  }

  get attack() {
    return this.strength-10*(this.distance-1);
  }

  get stoned() {
    return this.attack-Math.log2(this.distance) * 5;
  }

}

export default Character;


