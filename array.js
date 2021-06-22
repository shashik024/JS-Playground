const array = ["one", "two ", "three", "four"];
const secondArryType = new Array("cow", "hen", "sparrow", "elephant"); //note Array A is capatlized

console.log(array);
console.log(secondArryType[3]); // shows 4th element
console.log(secondArryType.length); // shows length of array
secondArryType.pop(); // remove last element of array
console.log(secondArryType);
secondArryType.shift(); // remove first element of array
console.log(secondArryType);
secondArryType.unshift("new value ", "fox"); // add element on front of array
console.log(secondArryType);

secondArryType.indexOf("hen"); // shows index of hen in array (starts from 0)
console.log(secondArryType.indexOf("hen"));

console.log(Array.from("Shashi")); // from method create an array of individual letters

//Map function usage
//map method always produe another array
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map(function (val, index, arr) {
  return val + 2;
});
//val = value in array
//index = index of element starts from 0
//arr = name of array we use in callback function
console.log(newArr);

// array.reduce method

const arrtobeReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reducedArray = arrtobeReduce.reduce((accum, value) => {
  return accum + value;
}, 0);
console.log(reducedArray);

// Array destructuring

const person = ["shashi ", "kant ", "sharma ", "rohtak"];

const [, , , forthelement] = person;

console.log(forthelement);

// object and array destructuring
// destructuring object in function arguments
const scoter = {
  name: "Bajaj",
  model: "e1152",
  make: 2020,
  color: "Black",
};

const toffies = ["eclair", "cadbury", "chokolava", "butterscoth"];

function getData({ name } = {}, [, , thirdToffy] = []) {
  console.log(name, thirdToffy);
}
getData();
getData(scoter, toffies);
