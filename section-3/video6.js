function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Animal(breed) {
  this.breed = breed;
}
Animal.prototype.sound = function () {
  console.log("animal sound");
};

let petAnimal = {
  pet() {
    console.log("pet animal");
  },
};

function Cat(legs, breed) {
  Animal.call(this, breed);
  this.legs = legs;
}

extend(Cat, Animal);

Cat.prototype.sound = function () {
  console.log("Meow meow");
};

Object.assign(Cat.prototype, petAnimal);

let cat = new Cat(4, "abc");

console.log(cat.pet());

function Dog() {}

Object.assign(Dog.prototype, petAnimal);

function Lion() {}

extend(Lion, Animal);
let lion = new Lion();
