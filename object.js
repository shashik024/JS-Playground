//object destructuring

const person = {
  name: "shashi kant",
  hobby: "Reading ",
  height: 5.7,
};

const name = "sahil sharma"; // new element
const { name: naam, hobby } = person;

console.log(naam, name, hobby);
