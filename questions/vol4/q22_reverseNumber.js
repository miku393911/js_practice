// 22. 配列 `numbers` の要素を逆順にした新しい配列 `reversed` を作成して出力してください。（`reverse`禁止）
const numbers = [39, 6, 25];
let reversed = [];
for(let i = numbers.length - 1; i >= 0; i--){ // 最後の番号から1減らしたものが配列の右端の要素になる、ループは0以上（配列が0番目開始    
    reversed.push(numbers[i]);  // 　最後の要素から順に追加していく
}
console.log(reversed);

/* メソッドを使うと...
const reversed = [...numbers].reverse();  元の配列をコピーして逆順にする
console.log(reversed); */