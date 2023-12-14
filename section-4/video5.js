class Employee {
  constructor(name, salary, skills) {
    this.name = name;
    this.salary = salary;
    this.skills = skills;
  }

  //instance methods
  get displayName() {
    return this.name;
  }

  set setDesignation(designation) {
    this.designation = designation;
  }

  //static methods
  static parseJson(data) {
    let obj = JSON.parse(data);
    return new Employee(obj.name, obj.salary, obj.skills);
  }
}

let emp = new Employee("sai", 40000, ["java", "javascript"]);
emp.name;
emp.setDesignation = "full stack developer";
console.log(emp);
