//working with promises

const getData = new Promise((resolve, rejected) => {
  resolve("hello");
  // rejected("No data found !!!");
});

// console.log(getData);

getData
  .then((value) => {
    console.log("The value is " + value);
    return "other values";
  })
  .then((output) => {
    console.log(output);
  })
  .catch((error) => {
    console.log(error);
  });

// promise example 2nd

const PromiseFunction = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is greater than 10 !!!");
    } else {
      reject("Number is less than 10 !!");
    }
  });
};

//function call
// PromiseFunction(-1)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// aysnc await function

// async function asyncFunction() {
//   const value = await PromiseFunction(30); // await is like ==> .then
//   console.log(value);
// }

// asyncFunction();

//async await function with try catch usage for error handeling

async function asyncWithTryCath() {
  try {
    const outputData = await PromiseFunction(20);
    console.log(outputData);
  } catch (error) {
    console.log(error);
  }
}

asyncWithTryCath();

// tip : fetch is a browser api
// Promise.all takes array of promises and execute them all in parallel . If one of the promises fail then whole chain of promises fail

//Promise.all usage

async function promiseAllusage() {
  try {
    const promises = [fetch1(), fetch2()];
    const [val1, val2] = await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
}

// Memory representation of component tree is virtual   dom but only used internally by react . When virtual dom is ready it is been inserted in the mouning element on the webpage

// the idea behind virtual dom is to reduce the number of update of real dom

// flux imples data in the app goes from top to bottom
