//arrow function is useful for small functions that you use only once

const hello = function(i){
    console.log("hello",i);
}

hello("ok");

const hello2 = (i) => {
    console.log("hello2",i);
    console.log("you are old");
}

hello2("ok")

//example usage with .map()
//same you can use with .filter() and .reduce() methods

const numbers = [1,2,3,4,5];

const squares = numbers.map((element) => Math.pow(element,2));

console.log(squares);