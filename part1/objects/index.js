//like dictionaries in python we have objects in javascript

const person = {
    firstname: "kaku",
    lastname: "majoka",
    age: 18,
    isemployed: false,
    sayhello : ()=>{console.log("Bonjour")} //we can use function too
};

console.log(person.firstname)
console.log(person.age)
person.sayhello()

//we cant have two objects with same name

const person1 = {
    firstname: "taksh",
    lastname: "majoka",
    age: 8,
    isemployed: false,
    sayhello : function(){console.log("hello")}
};

console.log(person1.firstname)
console.log(person1.age)
person1.sayhello()