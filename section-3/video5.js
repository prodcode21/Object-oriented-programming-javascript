function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Animal(breed) {
  this.breed = breed;
}

//form-1
Animal.prototype.sound = function () {
  console.log("animal sound");
};

function Cat(legs, breed) {
  Animal.call(this, breed);
  this.legs = legs;
}

extend(Cat, Animal);

//form-2
Cat.prototype.sound = function () {
  console.log("Mewo meow");
};

let cat = new Cat(4, "abc");

// console.log(cat.sound());

function Dog(breed) {
  Animal.call(this, breed);
}
extend(Dog, Animal);

//form-3
//method overriding
Dog.prototype.sound = function () {
  console.log("bow bow");
};
let dog = new Dog("abc");
// console.log(dog.sound());

let arr = [new Dog(), new Cat()];

for (let objs of arr) {
  console.log(objs.sound());
}
