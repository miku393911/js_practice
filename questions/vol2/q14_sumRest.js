// Q14
// 引数がいくつ来ても全部numbersという配列に入る（ ... -> 残余引数）+ .reduce()メソッドで足していく（足していくための初期値は0！
const sumAll = (...numbers) => numbers.reduce((acc, sum) => acc + sum, 0) // 引数は、合計と現在の値の2つを取る
console.log(sumAll(1, 2, 3)); // Expected: 6
console.log(sumAll(10, 20));  // Expected: 30
