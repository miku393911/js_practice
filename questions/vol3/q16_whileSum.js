// 16. while文を使って、1 から順に数値を足していき、合計が 20 を超えた時点での「最後に足した数値」を出力してください。
let number = 1; //次に足す数字
let sum = 0; //今の合計
while (sum <= 20){
    sum = sum +  number;
    if(sum > 20){
        console.log(number);
        break; //最適解: これでループだけを終わらせる
    } //breakがないと、whileの条件判定まで処理が続いてしまう
    number++;
}