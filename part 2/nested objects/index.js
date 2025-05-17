//objects inside other objects

const student = {
    name: "Alice",
    age: 21,
    isEnrolled: true,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipcode: "12345"
    },
    grades: {
        math: 90,
        science: 85,
        english: 92
    },
    hobbies:["tv","playing football"],
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(student.address.city);
console.log(student.hobbies[1]);
student.greet();

//---------------- EXAMPLE ---------------------
// Address class
class Address {
    constructor(street, city, zipcode) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }

    fullAddress() {
        return `${this.street}, ${this.city}, ${this.zipcode}`;
    }
}

// Student class
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;  // address is an instance of Address class
    }

    printDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address.fullAddress()}`);
    }
}

const addr = new Address("123 Main St", "Springfield", "12345");
const student1 = new Student("Alice", 21, addr);

student1.printDetails();

