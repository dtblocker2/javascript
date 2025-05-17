//declaration
let x;
let y;

//assignment
x = 100;
y = 2;

console.log(x,y)

//declaration + assignment
let z = 120;

//alternative of print(f"")
let age = 20;
let name_2 = "Dhruva"; //name is global variable so use another variable name_2

console.log(typeof name_2, typeof age);
console.log(`Your name is ${name_2} and your age is ${age}`); //use `` instead of ""

//boolean
let online = true;
console.log(`this website is online: ${online}`);

//small project
document.getElementById("p1").textContent = `You are ${name_2}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Just random text`;