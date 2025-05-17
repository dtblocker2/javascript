//constants variable which can be assigned value only one time and cant be changed

const pi = 3.14159 //so that someone may not change value of parameter

let radius = Number(window.prompt("What is radius?"));

let area = pi*radius**2
console.log("Area is: ", area);