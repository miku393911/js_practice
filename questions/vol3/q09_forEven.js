// 9. for文を使って、1 から 20 までの数値のうち、偶数だけを出力してください。
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// ループの回数自体を減らす書き方、もとから2つ飛ばしで数をループさせることで偶数のみを選定することがあできる
for(let number = 2; number <= 20; number+=2){
    console.log(number);
}