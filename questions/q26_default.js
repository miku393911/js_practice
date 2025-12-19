// Q26. 変数 `inputName` が空文字等の falsy な値の場合に、デフォルト値として "Guest" を採用するロジックを記述し、`displayName` に代入してください。
const inputName = "";
//const displayName = inputName ? inputName : "Guest" ; //三項演算子だと重複している
const displayName = inputName || "Guest" ; //論理演算子だと重複なし、inputNameならinputNameを返す、inputNameでないなら右辺を返す
console.log(displayName); // Expected: Guest
//三項演算子は明らかな条件分岐の時、論理演算子は冗長する場合や条件付き実行||や&&の時で使い分ける