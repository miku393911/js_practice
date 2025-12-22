// 18. while文を使って、3 の倍数を 10 から逆順に探し、最初に見つかった 3 の倍数（9）を出力して終了する処理を書いてください。
let number = 10;
while(number <= 10){ //最適解: 今回は制限がない値の範囲だったので、条件定義にtrueを入れてbreakで止めるまで永遠にループするという強い強い意味を持つ
    if(number % 3 === 0){
        console.log(number);
        break;
    }
    number--;
}