//JSON = {Java Script Object Notation} data interchange format
/**
 * used to exchange data between sever and web app
 * JSON file {key : values} OR {value1,value2,value3}
 * 
 * JSON.stringify()= coverts a JS object into a JSON string
 * JSON.parse() = coverts JSON string to a JS object
 */

const names = ["spongebob", "patrick", "squidward","sandy"];
const person = {
    "name" : "spongebob",
    "age" : 30,
    "isEmployed" : true,
    "hobbies" : ["jellyfishing","karate","cooking"]
};

const jsonstring = JSON.stringify(names);
console.log(jsonstring);

const parsedata = JSON.parse(jsonstring);
console.log(parsedata);

//fetch data
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))