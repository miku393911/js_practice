// Q18. `users`配列の中から、`id` が 3 であるユーザーのオブジェクトを検索して取得してください。
const users = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "Dave", age: 18 }
];
const user3 = users.find( (user) => user.id === 3);
console.log(user3); // Expected: { id: 3, name: "Charlie", age: 30 }