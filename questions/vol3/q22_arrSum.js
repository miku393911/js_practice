// 22. for文を使って、配列 `[10, 20, 30]` の要素の合計を計算し、出力してください。
const numbers = [10, 20, 30];
let sum = 0;
/*for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum); //最後の合計だけを出力する*/

// 現場向き
/*for(const number of numbers){
    sum += number;
}
console.log(sum);*/

const total = numbers.reduce( (acc, current) => acc += current); //複数の要素を1つにまとめる（引数は合計と現在の2つ
console.log(total);