// 12. 文字列 `"programming"` の中に、文字 `"g"` がいくつ含まれているか数えるプログラムを書いてください。
const newProgramming = "programming";
let count = 0;
for(let i = 0; i < newProgramming.length; i++){
    newProgramming[i].includes("g"); // 文字列分(programming分の11文字が出力結果にt形容される)
    count++;
}
console.log(count);
// 上記のコードは間違い

// 正解
const firstProgramming = "programming";
let number = 0;
for(let i = 0; i < firstProgramming.length; i++){
    if(firstProgramming[i].includes("g")) number++;  // if文で条件分岐をしているため、きちんと"g"の数だけ出力される"
}
console.log(number);