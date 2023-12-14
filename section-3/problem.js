function Cat(legs) {
  this.legs = legs;
}

Cat.prototype.sound = function () {
  console.log("mewo meoew");
};

let cat = new Cat(4);
console.log(cat);

function Dog() {}

Dog.prototype.sound = function () {
  console.log("bow bow");
};
