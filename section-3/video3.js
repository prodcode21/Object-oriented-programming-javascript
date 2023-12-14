function Animal(breed) {
  this.breed = breed;
}
Animal.prototype.sound = function () {
  console.log("mewo meoew");
};

function Cat(legs, breed) {
  Animal.call(this, breed);
  this.legs = legs;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
let cat = new Cat(4, "abc");
let animal = new Animal();
console.log(cat.breed);
