//object destructuring

const person = {
  name: "shashi kant",
  hobby: "Reading ",
  height: 5.7,
};

const name = "sahil sharma"; // new element
const { name: naam, hobby } = person;

console.log(naam, name, hobby);

//Object destructuring

const products = {
  itemName: "softToys",
  expirey: "6 months",
  material: "platic",
  importFrm: "china",
};

const { itemName, ...otherDetails } = products;

console.log(otherDetails);

//array destructuring

const fabric = ["cotton", "330mg", "white", "44'width"];

const [firstAttribute, ...restDetails] = fabric;

console.log(restDetails);

// rest of arguments in function

function showData(first, second, third, ...remaining) {
  console.log(...remaining);
}
showData(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// spread operator inside an object

const sky = {
  color: "blue ",
  air: "clean",
  isStars: "no",
};

const nightSky = {
  ...sky,
  color: "black",
  isStar: "yes",
};
console.log(nightSky);

//spread operator inside an array

const box = ["toy1", "toy2", "toy3", "toy4"];
const polyBag = ["bag1", "bag2", "bag3"];
const bigBox = [...box, ...polyBag, "otherItems"];

console.log(bigBox);
