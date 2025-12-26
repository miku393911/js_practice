// 3. 3つの変数 `a`, `b`, `c` の中から最も大きい数値を特定して出力してください。（`Math.max` は使用禁止）
const a = 3;
const b = 9;
const c = 39;
let maxNum = a;  // 暫定チャンピオンを決める
// 順次処理
if(maxNum < b){  // 暫定チャンピオンを最初の値に設定しておくことで、次の値が大きかったら...と書き足すだけで良い
    maxNum = b;  //　条件に沿わない場合は何もしないので、何も書かなくて良い
}if(maxNum < c){
    maxNum = c;
}

console.log(maxNum);