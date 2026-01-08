// 20. 配列 `[10, -5, 20, -3, 30]` から、正の数（0より大きい数）だけを集めた新しい配列を `filter` を使って作成し、出力してください。
const numbers = [10, -5, 20, -3, 30];
const newNumbers = numbers.filter((number) => number > 0);
console.log(newNumbers);