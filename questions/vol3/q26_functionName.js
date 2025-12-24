// 26. 引数 `name` を受け取り、「こんにちは、[name]さん」と出力する関数 `sayHello` を定義してください。
const sayHello = (name) => {
    console.log(`こんにちは、${name}さん`);
};
sayHello("miku");
// q25のようにアロー関数の{}を省略して1行で記述しても良いが、可読性が下がる