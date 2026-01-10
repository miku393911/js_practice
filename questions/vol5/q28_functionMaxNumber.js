// 28. 2つの数値を受け取り、大きい方の数値を返す関数 `getMax` を作成してください。（`Math.max` を使ってもOKです）
const getMax = (a, b) => {
    if(a > b){
        return a;
    }else{
        return b;
    }
}
console.log(getMax(3, 9));

// 三項演算子バージョン
const newMax = (a, b) => a > b ? a: b;
console.log(newMax(3, 9));

const maxNumber = Math.max(3, 9);  // Math.max()のの書き方
console.log(maxNumber);
// 今回の問題の意図を読むとこの書き方が良い
const newMaxNumber = (a, b) => Math.max(a, b);
console.log(newMaxNumber(3, 9));