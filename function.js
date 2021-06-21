//Function declaration , it can be called before
givesA();

function givesA() {
  console.log("Hi i am function declaration");
}

//function expression & it can not be called before
const functionExpression = function () {
  console.log("Hi i am function expression");
};

functionExpression();

//default values in function arguments

function defaultValue(num1 = 10, num2 = 12) {
  return console.log(num1 * num2);
}
defaultValue();
defaultValue(20, 30);

//Arrow function

const arrowFunction = (digit1 = 1, digit2 = 2) => {
  return digit1 * digit2;
};

console.log(arrowFunction());

console.log("");

// String interpolation receives expression

const giveName = () => "shashi kant";

console.log(`Hello My name is ${giveName()}`);
