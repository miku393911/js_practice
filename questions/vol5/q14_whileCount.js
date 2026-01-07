// 14. 変数 `count` を 5 から 1 まで減らしながら出力し、最後に "Start!" と出力するプログラムを書いてください。
let count = 5;
while(count > 0){
    console.log(count);
    count--;
}
if(count < 1){  // while文以降はループを抜けているので、わざわざif文を書く必要はない
    console.log("Start!");
}