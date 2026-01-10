// 29. 数値の配列を受け取り、その平均値を計算して返す関数 `calculateAverage` を作成してください。
const calculateAverage = (arr) => { // 引数はarrで、配列を表現する
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calculateAverage([39, 6, 25]));  //関数自体に値を書くのが定石