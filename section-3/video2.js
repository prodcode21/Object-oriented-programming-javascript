function Animal(breed) {
  this.breed = breed;
}
Animal.prototype.sound = function () {
  console.log("mewo meoew");
};

function Cat(legs, breed) {
  this.legs = legs;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
let cat = new Cat(4);
let animal = new Animal();
console.log(cat);
