class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  sound() {
    console.log("animal sound ");
  }
}

class Cat extends Animal {
  constructor(legs) {
    super(legs);
  }

  sound() {
    console.log("meow meow ");
  }
}

let cat = new Cat(4);
console.log(cat.sound());

class Dog extends Animal {
  constructor(legs) {
    super(legs);
  }

  sound() {
    console.log("bow bow ");
  }
}

let dog = new Dog(4);

console.log(dog.sound());
