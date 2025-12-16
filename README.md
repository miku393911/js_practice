/**
 * JavaScript 文法確認 & 実践練習問題 30問 (ES6+)
 *
 * 【使い方】
 * 各問題のコードを書き、その下の console.log で結果を確認してください。
 * ターミナルで `node javascript_basic/grammar_practice.js` を実行して確認しましょう。
 *
 * テーマ:
 * 1. アロー関数 (Arrow Functions)
 * 2. 分割代入 (Destructuring Assignment)
 * 3. スプレッド構文など (Spread/Rest)
 * 4. 配列メソッド (Array Methods: map, filter, find, reduce)
 * 5. モダン演算子 (Optional Chaining, Nullish Coalescing, Ternary)
 */

// ==========================================
// セクション 1: アロー関数 (Arrow Functions)
// ==========================================

// Q1. 2つの引数 `a`, `b` を受け取り、その和を返すアロー関数 `addArrow` を定義してください。
// (functionキーワードは使用せず、アロー関数構文のみで記述すること)
console.log("\n--- Q1 ---");
// ここにコードを書いてください
// const addArrow = ...

console.log(addArrow(5, 3)); // Expected: 8


// Q2. 引数 `n` を受け取り、その2倍の値を返すアロー関数 `doubleArrow` を定義してください。
// (コードを短くするため、引数の丸括弧 `()` と return文、中括弧 `{}` を省略した記法で書くこと)
console.log("\n--- Q2 ---");
// const doubleArrow = ...

console.log(doubleArrow(10)); // Expected: 20


// Q3. 引数 `name` を受け取り、オブジェクト `{ name: name, role: "member" }` を返すアロー関数 `createUser` を定義してください。
// (省略記法を使いつつ、オブジェクトを正しく返すように記述すること)
console.log("\n--- Q3 ---");
// const createUser = ...

console.log(createUser("Miku")); // Expected: { name: 'Miku', role: 'member' }


// Q4. 配列 `numsQ4` の各要素を2乗した新しい配列 `squared` を作成してください。
// (forループは使わず、適切な配列メソッドとアロー関数を組み合わせて一行で記述すること)
const numsQ4 = [1, 2, 3, 4];
console.log("\n--- Q4 ---");
// const squared = ...

console.log(squared); // Expected: [1, 4, 9, 16]


// Q5. アロー関数と通常の関数(`function`)における `this` の挙動の違いについて。
// 以下のコードの `myObj.showArrow()` と `myObj.showFunc()` の実行結果を予測し、
// なぜそうなるのか理由を簡潔にコメントで記述してください。
console.log("\n--- Q5 ---");
const myObj = {
  value: "Hello",
  showArrow: () => console.log(this.value),
  showFunc: function() { console.log(this.value); }
};
// myObj.showArrow(); // undefined (or Error in strict mode environments/modules depending on context)
// myObj.showFunc(); // "Hello"
console.log("答え: ");


// ==========================================
// セクション 2: 分割代入 (Destructuring)
// ==========================================

// Q6. オブジェクト `person` からプロパティ `name` と `age` を取り出し、同名の定数として定義してください。
const person = { name: "Tanaka", age: 25, gender: "male" };
console.log("\n--- Q6 ---");
// const { name, age } = ...

console.log(name, age); // Expected: Tanaka 25


// Q7. オブジェクト `person` の `name` プロパティを、`userName` という変数名で取り出して定義してください。
console.log("\n--- Q7 ---");
// const { name: userName } = ...

console.log(userName); // Expected: Tanaka


// Q8. 配列 `colors` の先頭2つの要素を、それぞれ変数 `first`, `second` に代入してください。
const colors = ["Red", "Green", "Blue", "Yellow"];
console.log("\n--- Q8 ---");
// const [first, second] = ...

console.log(first, second); // Expected: Red Green


// Q9. 配列 `colors` の「3番目」の要素だけを抽出し、変数 `third` に代入してください（1, 2番目の要素は変数に代入しないこと）。
console.log("\n--- Q9 ---");
// const [, , third] = ...

console.log(third); // Expected: Blue


// Q10. ネストされたオブジェクト `settings` から `city` の値を取り出し、変数 `city` として定義してください。
const settings = {
  theme: "dark",
  location: {
    city: "Tokyo",
    zip: "100-0001"
  }
};
console.log("\n--- Q10 ---");
// const { location: { city } } = ...

console.log(city); // Expected: Tokyo


// ==========================================
// セクション 3: スプレッド構文 & 残余引数
// ==========================================

// Q11. 配列 `arr1` と `arr2` のすべての要素を結合し、新しい配列 `merged` を作成してください。
// (`concat` メソッドは使用せず、モダンな構文を使うこと)
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("\n--- Q11 ---");
// const merged = ...

console.log(merged); // Expected: [1, 2, 3, 4]


// Q12. 配列 `arr1` の内容をそのまま含み、かつ先頭に `0` を追加した新しい配列 `newArr` を作成してください。
// (`unshift` 等で既存配列を変更するのではなく、新しい配列を生成すること)
console.log("\n--- Q12 ---");
// const newArr = ...

console.log(newArr); // Expected: [0, 1, 2]


// Q13. オブジェクト `baseObj` のプロパティを全て継承しつつ、`b` の値だけ `99` に上書きした新しいオブジェクト `updatedObj` を作成してください。
const baseObj = { a: 1, b: 2, c: 3 };
console.log("\n--- Q13 ---");
// const updatedObj = ...

console.log(updatedObj); // Expected: { a: 1, b: 99, c: 3 }


// Q14. 任意の数の引数（数値）を受け取り、その合計値を返す関数 `sumAll` を定義してください。
// 引数の数が決まっていない場合でも動作するように実装すること。
console.log("\n--- Q14 ---");
// const sumAll = ...

console.log(sumAll(1, 2, 3)); // Expected: 6
console.log(sumAll(10, 20));  // Expected: 30


// Q15. 配列 `fruits` の「最初の要素」を変数 `head` に、
// 「それ以外の残りの全ての要素」を配列として変数 `rest` に代入してください。
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("\n--- Q15 ---");
// const [head, ...rest] = ...

console.log(head); // Expected: Apple
console.log(rest); // Expected: ["Banana", "Cherry", "Date"]


// ==========================================
// セクション 4: 配列メソッド (map, filter, find, reduce)
// ==========================================

const users = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 30 },
  { id: 4, name: "Dave", age: 18 }
];

// Q16. `users` 配列のデータから、各ユーザーの `name` だけを集めた新しい配列 `names` を作成してください。
console.log("\n--- Q16 ---");
// const names = ...

console.log(names); // Expected: ["Alice", "Bob", "Charlie", "Dave"]


// Q17. `users` 配列の中から、`age` が 25以上のユーザーデータだけを抽出した新しい配列 `adults` を作成してください。
console.log("\n--- Q17 ---");
// const adults = ...

console.log(adults); // Expected: [{id:2...}, {id:3...}]


// Q18. `users` 配列の中から、`id` が 3 であるユーザーのオブジェクトを検索して取得してください。
console.log("\n--- Q18 ---");
// const user3 = ...

console.log(user3); // Expected: { id: 3, name: "Charlie", age: 30 }


// Q19. `users` 配列に含まれる全ユーザーの `age` の合計値を算出してください。
console.log("\n--- Q19 ---");
// const totalAge = ...

console.log(totalAge); // Expected: 93


// Q20. `users` 配列から、「20歳以上」のユーザーの「名前(name)」だけを集めた配列 `namesOver20` を作成してください。
// (中間変数を作らず、メソッドチェーンを使って記述すること)
console.log("\n--- Q20 ---");
// const namesOver20 = ...

console.log(namesOver20); // Expected: ["Alice", "Bob", "Charlie"]


// Q21. 配列 `roles` の中に、文字列 "Admin" が存在するかどうかを真偽値で判定してください。
const roles = ["User", "Editor", "Viewer"];
console.log("\n--- Q21 ---");
// const isAdmin = ...

console.log(isAdmin); // Expected: false


// Q22. 配列 `scores` を昇順（小さい順）に並び替えてください。
// (数値として正しく比較されるように注意すること)
const scores = [80, 10, 50, 100, 30];
console.log("\n--- Q22 ---");
// scores.sort(...);

console.log(scores); // Expected: [10, 30, 50, 80, 100]


// Q23. 配列 `scores` の中に、90点以上のスコアが「少なくとも1つ」含まれているかを判定してください。
console.log("\n--- Q23 ---");
// const hasExcellent = ...

console.log(hasExcellent); // Expected: true


// ==========================================
// セクション 5: モダン演算子 & ロジック
// ==========================================

// Q24. 変数 `score` の値が 60以上であれば "Pass"、そうでなければ "Fail" という文字列を返す式を記述し、結果を `result` に代入してください。
// (if文は使用しないこと)
const score = 55;
console.log("\n--- Q24 ---");
// const result = ...

console.log(result); // Expected: Fail


// Q25. 変数 `isLoggedIn` が `true` の場合のみ、コンソールに "Welcome" と表示する処理を記述してください。
// (if文は使用せず、論理演算子を使って一行で記述すること)
const isLoggedIn = true;
console.log("\n--- Q25 ---");
// ...


// Q26. 変数 `inputName` が空文字等の falsy な値の場合に、デフォルト値として "Guest" を採用するロジックを記述し、`displayName` に代入してください。
const inputName = "";
console.log("\n--- Q26 ---");
// const displayName = ...

console.log(displayName); // Expected: Guest


// Q27. 変数 `val` が `null` または `undefined` の場合のみ "Default" を返し、それ以外（0や空文字含む）はそのままの値を返す処理を記述してください。
const val = 0;
console.log("\n--- Q27 ---");
// const output = ...
// Nullish coalescing 演算子 (`??`) を使用して、`val` が `null` または `undefined` の場合にのみ "Default" を返し、それ以外の場合は `val` の値を返す式を記述し、結果を `output` に代入してください。

console.log(output); // Expected: 0  (もし || を使うと "Default" になってしまう)


// Q28. オブジェクト `apiResponse` の深い階層にある `data.user.name` プロパティにアクセスしたいですが、途中のプロパティが存在しない可能性があります。
// エラーを起こさずに安全にアクセスし、存在しない場合は `undefined` となるように記述してください。
const apiResponse = { status: 200 }; // data プロパティがない
console.log("\n--- Q28 ---");
// オプショナルチェーン (`?.`) を使用して、`apiResponse` オブジェクトの `data.user.name` プロパティに安全にアクセスし、結果を `userNameFromApi` に代入してください。

console.log(userNameFromApi); // Expected: undefined


// Q29. 変数 `keyName` の値をプロパティ名（キー）として持つオブジェクト `dynamicObj` を作成してください。
// プロパティの値は `val2` の中身とします。
const keyName = "dynamicKey";
const val2 = 123;
console.log("\n--- Q29 ---");
// const dynamicObj = ...

console.log(dynamicObj); // Expected: { dynamicKey: 123 }


// Q30. 商品リスト `products` から、「在庫あり(available: true)」かつ「価格(price)が1000円以上」の商品の「名前(name)」を抽出し、
// それらをカンマ区切りの1つの文字列として定形してください。
// (例: "Notebook, Scissors")
const products = [
  { name: "Pen", price: 100, available: true },
  { name: "Notebook", price: 1200, available: true },
  { name: "Eraser", price: 80, available: false },
  { name: "Marker", price: 1500, available: false },
  { name: "Scissors", price: 1100, available: true }
];
console.log("\n--- Q30 ---");
// const productNames = ...

console.log(productNames); // Expected: Notebook, Scissors


console.log("\n=== Practice End ===");
