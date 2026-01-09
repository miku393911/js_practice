// 24. 配列 `[10, 20, 30]` の合計を `reduce` を使って計算してみてください。（難しければ for文でもOKですが、ぜひ `reduce` に挑戦してみてください）
const numbers = [10, 20, 30];
const reduce = numbers.reduce((arr, cur) => {arr += cur}, 0);  // 初期値を設定して、何に足すかを示す
console.log(reduce);