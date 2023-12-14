let emp = {
  name: "Sai",
  age: 23,
  skills: ["java", "javascript"],
  address: {
    street: "street",
  },

  getName: function () {
    console.log(this.name);
  },
};

//set the properties'

emp.designation = "Full stack developer";

console.log(emp.designation);

//delete the properties

delete emp.age;
console.log(emp);

//type-1
//using dot operator
// console.log(emp.name);
//type-2
// console.log(emp["name"]);

//accessing the skills

// console.log(emp.skills[0]);
// console.log(emp["skills"][0]);

//nested objects
// console.log(emp["address"]["street"]);

//function
// console.log(emp.getName());
// console.log(emp["getName"]());
