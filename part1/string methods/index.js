let username= "   dtblocker d   ";

console.log(username.charAt(0));
console.log(username.indexOf("t"));
console.log(username.lastIndexOf("d"));
console.log(username.length);
console.log(username.trim());

//you get the idea
//string slicing

const FullName = "Bro Code";
let firstname = FullName.slice(0,FullName.indexOf(" "));
let lastname = FullName.slice(FullName.indexOf(" ")+1, );
let lastname2 = FullName.slice(FullName.indexOf(" ")+1, -1);

console.log(firstname);
console.log(lastname);
console.log(lastname2);

//method chaining
let x = FullName.toLowerCase().replace(" ", "d");
console.log(x);