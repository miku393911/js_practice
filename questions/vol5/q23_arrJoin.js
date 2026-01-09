// 23. 配列 `["Japan", "USA", "UK"]` の要素を `" / "` という区切り文字でつないで、1つの文字列として `join` を使って出力してください。
const country = ["Japan", "USA", "UK"];
const newCountry = country.join(" / ");
console.log(newCountry);

// 逆に戻したい場合は、　.split()メソッドを使う
const arr = "Japan / USA / UK";
const newArr = arr.split(" / ");
console.log(newArr);