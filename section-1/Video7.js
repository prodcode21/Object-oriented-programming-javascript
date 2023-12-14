let x = 80;
let y = x; //copying the values
x = 100;
// console.log(x, y);

let obj = {
  x: 70,
};

let obj2 = obj; //copying the address

obj2.x = 90;
console.log(obj.x);
console.log(obj2.x);
