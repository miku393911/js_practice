// 23. 2つの配列 `arr1` と `arr2` を結合した新しい配列 `combined` を作成してください。（`concat`禁止）
const arr1 = [39, 6, 25];
const arr2 = ["miku", "yuka", "yuuta"];
const combined = [...arr1, ...arr2];
console.log(combined);

// これはスプレッド構文を使った方が簡潔に書ける