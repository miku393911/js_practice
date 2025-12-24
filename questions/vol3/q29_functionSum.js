// 29. 引数 `n` を受け取り、1 から `n` までの合計を計算して返す関数 `totalSum` を定義してください。
const totalSum = (n) => {
    let sum = 0; //関数外に書いても良いが、もう1度console.log()した場合に1度目の6が残ってしまうので、関数内に書きリセットするのが普通
    for(let i = 1; i <= n; i++){
        sum = sum + i;  //ここにreturnを書くと繰り返し処理が終わってしまうのでここには書かない
    }
    return sum; //繰り返し処理をした後の合計だけを出力
}
console.log(totalSum(3));