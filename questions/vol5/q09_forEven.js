// 9. for文を使って、1 から 20 までの整数のうち、偶数（2で割り切れる数）だけを出力してください。
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// 偶数基準のパターン
for(let number = 2; number <= 20; number += 2){
    console.log(number);
}