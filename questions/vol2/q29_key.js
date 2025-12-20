// Q29. 変数 `keyName` の値をプロパティ名（キー）として持つオブジェクト `dynamicObj` を作成してください。
// プロパティの値は `val2` の中身とします。
const keyName = "dynamicKey";
const val2 = 123;
const dynamicObj = { [keyName] : val2}; //キーとして表示したい場合は、[]で囲むことでその中身を出すことができる
console.log(dynamicObj); // Expected: { dynamicKey: 123 }