function Animal() {}
Animal.prototype.sound = function () {
  console.log("mewo meoew");
};

function Cat(legs) {
  this.legs = legs;
}

Cat.prototype = Object.create(Animal.prototype);

let cat = new Cat(4);
//let animal = new Animal();
console.log(cat);
