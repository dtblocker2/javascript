const numbers = [40, 10, 5, 100, 1];

numbers.sort(); // ❌ Incorrect: sorts as strings → [1, 10, 100, 40, 5]
console.log(numbers);

numbers.sort((a, b) => a - b); // ✅ Ascending
console.log(numbers); // [1, 5, 10, 40, 100]

numbers.sort((a, b) => b - a); // ✅ Descending
console.log(numbers); // [100, 40, 10, 5, 1]


const fruits = ["banana", "apple", "orange", "grape"];

fruits.sort(); // ✅ Alphabetical (A-Z)
console.log(fruits); // ["apple", "banana", "grape", "orange"]

fruits.sort().reverse(); // ✅ Z-A
console.log(fruits); // ["orange", "grape", "banana", "apple"]


const students = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
];

// Sort by age (ascending)
students.sort((a, b) => a.age - b.age);
console.log(students);

// Sort by name (alphabetically)
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);


const names = ["alice", "Bob", "charlie", "David"];

names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["alice", "Bob", "charlie", "David"]
