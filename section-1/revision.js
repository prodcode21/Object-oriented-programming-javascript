//
let obj = {};
//adding
obj.name = "test";
obj.email = "test@example.com";
obj.password = "password";

//add the methods

console.log(obj);

delete obj.name;

let obj2 = new Object();

let obj4 = Object.create(obj);
console.log(obj4.name);

console.log(obj4.email);
console.log(obj4["email"]);

let emp = {}; // new Object();

//enumerating

for (let keys in obj) {
  console.log(obj[keys]);
}

console.log(Object.keys(obj));

// value vs reference
let x = 90;
let y = x;
x = 100;

let obj5 = obj;
obj.email = "xyz@gmail.com";
console.log(obj5.email);

console.log(y);
