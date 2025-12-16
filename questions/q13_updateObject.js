// Q13
const baseObj = { a: 1, b: 2, c: 3 };
const updatedObj = { ...baseObj, b: 99 }; //1行でまとめて書ける（要素の1つだけを編集したい時
console.log(updatedObj); // Expected: { a: 1, b: 99, c: 3 }
