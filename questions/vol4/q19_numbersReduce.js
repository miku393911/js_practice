// 19. 配列 `numbers` (例: `[10, 25, 4, 30]`) の要素をすべて足し合わせた合計を出力してください。
const numbers = [39, 6, 25];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// メソッドで書くと...
const total = numbers.reduce((arr, cur) => arr + cur, 0);  // 初期値を設定して何に足すのか記す（上記のコードで言う let sum = 0;
console.log(total);