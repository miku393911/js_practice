// Q20
const users = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "Dave", age: 18 }
]; //メソッドチェーンは、メソッドを繋げて条件を絞り込むことができる/ .() .()と表す
const namesOver20 = users.filter( (user) => user.age >= 20).map( (user) => user.name);
console.log(namesOver20); // Expected: ["Alice", "Bob", "Charlie"]