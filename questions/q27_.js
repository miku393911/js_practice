// Q27. 変数 `val` が `null` または `undefined` の場合のみ "Default" を返し、それ以外（0や空文字含む）はそのままの値を返す処理を記述してください。
const val = 0;
const output = val || "Default";
// Nullish coalescing 演算子 (`??`) を使用して、`val` が `null` または `undefined` の場合にのみ "Default" を返し、それ以外の場合は `val` の値を返す式を記述し、結果を `output` に代入してください。
console.log(output); // Expected: 0  (もし || を使うと "Default" になってしまう)