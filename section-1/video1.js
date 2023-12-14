//type-1

const emp = {
  name: "sai",
};

emp.age = 23;

//emp.name = "sai";
console.log(emp);

emp = { designation: "full stack" }; //not possible
console.log(emp);
//type-2

const emp2 = new Object({ name: "sai" });
//emp2.name = "sai";
//console.log(emp2);

//type-3:

const emp3 = Object.create(emp);
// console.log(emp3.name);
