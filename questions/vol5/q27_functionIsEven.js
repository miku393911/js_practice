// 27. 数値 `n` を受け取り、それが偶数なら `true`、奇数なら `false` を返す関数 `isEven` を作成してください。
const isEven = (n) => n % 2 === 0 ? true : false;  // 比較演算子は真偽値を返すので、三項演算子で書かなくても良い（ ? 以降）
console.log(isEven(3));