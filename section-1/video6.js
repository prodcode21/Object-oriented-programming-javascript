let obj = {
  name: "sai",
  designation: "fullstack developer",
};

console.log(obj["name"]);
console.log(obj.name);

//runtime

obj.rating = "4.5";
console.log(obj);

let property = "rating";
console.log(obj[property]);
