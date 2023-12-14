function createEmploye(name, age, skills, designation, salary, gender) {
  this.name = name;
  this.age = age;
  this.skills = [...skills];
  this.designation = designation;
  this.salary = salary;
  this.gender = gender;
}

let emp = new createEmploye(
  "Ravi",
  23,
  ["java", "javascript"],
  "full stack developer",
  50000
);
emp.gender = "male";

console.log(emp);

let emp2 = new createEmploye(
  "Sai",
  23,
  ["java", "javascript"],
  "full stack developer",
  50000
);
emp2.gender = "male";

console.log(emp2);
