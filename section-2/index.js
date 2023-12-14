function createEmployee(name, age, skils, desigation, salary) {
  this.name = name;
  this.age = age;
  this.skils = [...skils];
  this.desigation = desigation;
  this.salary = salary;
}
createEmployee.prototype.company = "google";
createEmployee.prototype.calbonus = function (b = 0) {
  return this.salary + b;
};

createEmployee.prototype.getName = function () {
  return this.name;
};

let emp = new createEmployee(
  "ravi",
  23,
  ["Java", "Python"],
  "Full stack developer",
  50000
);

// let emp2 = new createEmployee(
//   "sai",
//   23,
//   ["Java", "Python"],
//   "Full stack developer",
//   5000
// );

// console.log("emp: ", emp);
// console.log("emp2:", emp2);

// (own properties)
// console.log("Object.keys:", Object.keys(emp));

//(own properties ++ pp  )
for (keys in emp) {
  console.log(keys);
}

console.log(emp);
