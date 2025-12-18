// Q21. 配列 `roles` の中に、文字列 "Admin" が存在するかどうかを真偽値で判定してください。
const roles = ["User", "Editor", "Viewer"];
const isAdmin = roles.includes("Admin"); //.includes()メソッドなので、何の捻りもなくこの書き方をする
console.log(isAdmin); // Expected: false