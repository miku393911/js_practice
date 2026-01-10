// 30. 文字列 `password` を受け取り、長さが 8文字以上なら `true`、そうでなければ `false` を返す関数 `isValidPassword` を作成してください。
const isValidPassword = (password) => password.length >= 8;
console.log(isValidPassword("password"));