/**
 * destructuring =  extract values from arrays and objects
 *                  then assign them to variable in a convenient way
 *                  [] = to perform array destructuring
 *                  {} = to perform object destrucutring
 */

//--------------- EXAMPLE 1 ---------------------
// swap value of variables

let a = 2;
let b = 3;

[a,b] = [b,a];

console.log(a);
console.log(b);

//---------------- EXAMPLE 2 ---------------------
//swap 2 elements in array

let sequence = [1,2,3,4,5];
[sequence[4],sequence[2]] = [sequence[2],sequence[4]];
console.log(sequence)

//---------------- EXAMPLE 3 ---------------------
//assign variables to array

const [m,n,o,...remaining] = sequence;

console.log(m);
console.log(n);
console.log(o);
console.log(remaining);

//---------------- EXAMPLE 4 ---------------------
//extract values from object

const person1 = {
    firstname: "spongebob",
    lastname: "squarepants",
    age: 23,
    job: "Fry Cook",
};

const person2 = {
    firstname: "patrick",
    lastname: "star",
    age: 27,
};

const {firstname,lastname,age, job="unemployed"} = person2;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

//---------------- EXAMPLE 5 ---------------------
//destructure in function parameters

function displayPerson({firstname,lastname,age, job="unemployed"}){
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(job);
};

displayPerson(person1);