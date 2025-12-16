// Q7
const person = { name: "Tanaka", age: 25, gender: "male" };
const { name: userName } = person; //リネーム機能（上記の問題でnameプロパティが使われている場合、今回の問題でnameプロパティを使おうとしてもエラーを起こすのでリネーム機能を使う（userNameという変数名で取り出すことができる
console.log(userName); // Expected: Tanaka
