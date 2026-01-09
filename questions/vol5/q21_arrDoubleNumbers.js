// 21. 配列 `[10, 15, 20, 25]` の中から、最初に 20 以上になる数値を見つけて `find` を使って出力してください。
const numbers = [10, 15, 20, 25];
const newNumbers = numbers.find((number) => number >= 20);
console.log(newNumbers);