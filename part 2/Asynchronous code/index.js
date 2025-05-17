//synchronous code = execute line by line

//asynchronous code = does not follow line by line

//Example of Synchronous code
console.log("Task 1")
console.log("Task 2")
console.log("Task 3")

//Example of Asynchronous code
setTimeout(() => console.log("Task 1"),2000)
console.log("Task 2")
console.log("Task 3")
console.log("Task4")