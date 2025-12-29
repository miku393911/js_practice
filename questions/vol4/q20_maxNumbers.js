// 20. 配列 `numbers` の中から最大値を見つけて出力してください。
const numbers = [39, 6, 25];
let maxNumber = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];  // 大きい数字に代入する
    }
}
console.log(maxNumber);  // それを出力

// メソッドを使うと...
console.log(Math.max(numbers));  // これはNaNになるのダメ
const newMaxNumber = Math.max(39, 6, 25);  // 配列の要素をを直接書く（配列の名前ごと書いたらダメ
// const newMaxNumber = Math.max(...numbers); で配列をスプレッド構文でコピーしても良い
console.log(newMaxNumber);

