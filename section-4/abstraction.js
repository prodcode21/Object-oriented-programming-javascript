class Employee {
  #salary;
  constructor(name, salary, description, skills) {
    this.name = name;
    this.#salary = salary;
    this.description = description;
    this.skills = skills;
  }

  get getSalary() {
    return this.#salary;
  }
}

let emp = new Employee("sai", 34000, "he is full stack developer", [
  "java",
  "Javascript",
]);

console.log(emp.getSalary);
