// 30. 数値 `base` と 指数 `exponent` を受け取り、`base` の `exponent` 乗を計算して返す関数 `power` を作成してください。（`Math.pow`, `**` 演算子禁止。ループで実装すること）
const power = (base, exponent) => {
    let result = 1;  // 掛け算の初期値を設定 関数外に書いても良いが、関数内の方が良い
    for(let i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}
console.log(power(3, 9))