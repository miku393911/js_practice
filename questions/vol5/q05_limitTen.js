// 5. 1, 2, 3...と順番に数値を足していき、合計が 50 を超えた瞬間の合計値を出力するプログラムを書いてください。
let sum = 0;  // 合計の変数
for(let i = 0; ; i++){ // 変数の範囲は指定されていないので、空白だが;;は2つ必要
    sum += i;
    if(sum > 50){
        break;
    }
}
console.log(sum);

// while文を使うとより簡単に...
let result = 0;  // 上記のsum
let i = 0;  // iはループの変数
while(sum <= 50){
    sum += i;
    i++;
}
console.log(sum);