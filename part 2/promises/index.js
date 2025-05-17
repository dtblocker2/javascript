//bssic syntax

let promise = new Promise(function(resolve, reject) {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

promise
  .then(result => console.log(result))  // when resolved
  .catch(error => console.error(error));  // when rejected

  //chaining promises
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .catch(error => console.error(error));

//Async/Await (Modern Syntax)
async function example() {
  try {
    let result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
