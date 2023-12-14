let emp = {
  name: "Sai",
  age: 23,
  skills: ["java", "javascript"],
  address: {
    street: "street",
  },

  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

//iterating the emp
for (x in emp) {
  if (typeof emp[x] != "function") {
    console.log(emp[x]);
  }
}

//check property

if ("designation" in emp) {
  console.log(emp.age);
}

//keys all

console.log(Object.keys(emp));
