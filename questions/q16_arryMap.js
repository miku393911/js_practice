
const users = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "Dave", age: 18 }
];
const names = users.map( (user) => user.name);
console.log(names); // Expected: ["Alice", "Bob", "Charlie", "Dave"]