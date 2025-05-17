//this = reference to object where THIS is used
// same as self.name

const person = {
    firstname: "spongebob",
    lastname: "squarepants",
    age: 18,
    isemployed: false,
    sayhello : function (){console.log(`Bonjour my name is ${this.firstname}`)} //use regular function arrow function will give undefined
};

console.log(person.firstname)
console.log(person.age)
person.sayhello()