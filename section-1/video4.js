let emp = {
  name: "Sai",
  age: 23,
  skills: ["java", "javascript"],
  address: {
    street: "street",
  },

  get getName() {
    return this.name;
  },
  set setName(name) {
    this.name = name;
  },
};

//console.log(emp);

// for (x in emp) {
//   console.log(emp[x]);
// }
// emp.setName("krishna");
// console.log(emp.getName());

emp.setName = "krishna";
console.log(emp.getName);
