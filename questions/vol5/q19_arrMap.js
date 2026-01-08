// 19. 配列 `[1, 2, 3, 4, 5]` のすべての要素を 2倍にした新しい配列を `map` を使って作成し、出力してください。
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number*2);
console.log(newNumbers);

// 処理が複雑になると、 下記のようにブロック形式で記述することも可能
/*const newNumbers = numbers.map((number) => {
    const result = number*2;
    return result;
})*/