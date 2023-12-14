let emp = {
  name: "krishna",
  age: 23,
  skills: ["java", "javascript"],
  designation: "Full stack developer",
  salary: 50000,
};

// console.log(emp);

let emp2 = {
  name: "sai",
  age: 23,
  skills: ["java", "javascript"],
  designation: "Full stack developer",
  salary: 50000,
};

// console.log(emp2);

// let str = new String("krishna");
// console.log(str);

function createEmploye(name, age, skills, designation, salary) {
  this.name = name;
  this.age = age;
  this.skills = [...skills];
  this.designation = designation;
  this.salary = salary;
}

//adding properties and adding methods
//createEmploye.gender = "Male";

// createEmploye.getName = function () {
//   return this.name;
// };

const emp3 = new createEmploye(
  "sai",
  23,
  ["java", "java script"],
  "full stack developer",
  50000
);

//adding the properties
emp3.gender = "Male";
emp3.rating = 4.5;
console.log(emp3.gender);

//adding the methods
emp3.getName = function () {
  return this.name;
};
console.log(emp3.getName());
