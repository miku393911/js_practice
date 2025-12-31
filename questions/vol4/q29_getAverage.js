// 29. 配列を受け取り、その平均値を計算して返す関数 `getAverage` を作成してください。
const getAverage = (number) => {
    let average = 0;
    for(let i = 0; i < number.length; i++){
        average += number[i];
    }
    return (average / number.length);
}
console.log(getAverage([39, 6, 25]));