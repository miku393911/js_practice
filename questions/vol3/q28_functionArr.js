// 28. 配列を引数として受け取り、その配列の「最初の要素」を返す関数 `getFirst` を定義してください。
/*const getFirst = ([]) => users[0];  //分割代入になってしまう、依存関係になってしまうので間違い
const users = ["田中", "佐藤", "吉田"]; //関数の中に外の変数名を直接書かない！　引数を通してやり取りする
console.log(getFirst([]));*/

// 正解
const getFirst = (arr) => arr[0]; // 引数を使って関数内に外の変数名を書けるよう、やり取りしている
const users = ["田中", "佐藤", "吉田"];
console.log(getFirst(users)); //配列の中身が詰まったものを関数に渡してあげる