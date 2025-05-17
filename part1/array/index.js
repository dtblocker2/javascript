let fruits = ["apple","banana","orange"];

console.log(fruits);

let fruit = fruits[0]
console.log(fruit);

fruits.push("coconut");
console.log(fruits.pop());

fruits.unshift("mango")
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("mango"));

for (let fruit of fruits){
    console.log(fruit)
}
fruits.sort()
fruits.sort().reverse()
console.log(fruits)
