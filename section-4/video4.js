class Employee {
  constructor(name, salary, skills) {
    this.name = name;
    this.salary = salary;
    this.skills = skills;
  }

  //instance methods
  displayName() {
    return this.name;
  }

  //static methods
  static parseJson(data) {
    let obj = JSON.parse(data);
    return new Employee(obj.name, obj.salary, obj.skills);
  }
}

let emp = Employee.parseJson(
  '{"name":"sai", "salary":40000, "skills": ["java", "javascript"]}'
);
console.log(emp);

// let obj = new Employee("sai", 40000, ["java", "javascript"]);
// console.log(obj.displayName());
