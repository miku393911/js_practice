// 11. 数値が入った配列 `numbers = [10, 20, 30, 40, 50]` の合計を for文を使って計算してください。
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// for of で書くと...
let sum1 = 0;
for(const number of numbers){
    sum1 += number;
}
console.log(sum1);

// .reduce()メソッドでも可能
const newNumber = numbers.reduce((arr,cur) => arr += cur);  // 合計と足そうとしている現在の値、2つの引数を取る
console.log(newNumber);