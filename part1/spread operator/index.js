/* 
spread operator = ...
allows an iterable object eg string or array to be expanded into separate elements
*/

let numbers = [1,2,3,4,5];
let maximum = Math.max(numbers); //error
let maximum2 = Math.max(...numbers);
console.log(maximum);
console.log(maximum2)

let username = "dtblocker";
let letters = [...username];
console.log(letters);

let newname = letters.join(".");
console.log(newname);