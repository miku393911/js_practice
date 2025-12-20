// Q17. `users` 配列の中から、`age` が 25以上のユーザーデータだけを抽出した新しい配列 `adults` を作成してください。
const users = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "Dave", age: 18 }
];
const adults = users.filter( (user) => user.age >= 25);
console.log(adults); // Expected: [{id:2...}, {id:3...}]
