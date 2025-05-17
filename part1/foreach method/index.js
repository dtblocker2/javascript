/*
forEach() = is built-in function for array class which accepts a callback function => callback function is function used in other function
*/

let x = ["apple","banana","mango"];

function display(t){
    console.log(t);
};

x.forEach(display);

function uppercase(element,index,array){
    array[index] = element.toUpperCase();
};

x.forEach(uppercase);
console.log(x);