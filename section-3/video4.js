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

function Cat(legs, breed) {
  Animal.call(this, breed);
  this.legs = legs;
}

extend(Cat, Animal);

let cat = new Cat(4, "abc");

function Dog() {}

extend(Dog, Animal);

let dog = new Dog();

console.log(dog.sound());
