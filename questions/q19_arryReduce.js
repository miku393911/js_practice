// Q19
const users = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "Dave", age: 18 }
];
const totalAge = users.reduce( (sum, user) => sum = sum + (user.age), 0); //.reduce()メソッドは基本引数を2つ取り、順番は累積値とループの引数
console.log(totalAge); // Expected: 93