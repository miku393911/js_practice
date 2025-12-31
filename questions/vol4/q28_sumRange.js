// 28. 2つの整数 `start` と `end` を受け取り、`start` から `end` までの整数の総和を返す関数 `sumRange` を作成してください。
const sumRange = (start, end) => {
    let sum = 0;  // startからendまでの数字の合計を求めなくてはいけない
    for(let i = start; i <= end; i++){ // startとendを使って書く
        sum += i;
    }  
    return sum;
}
console.log(sumRange(3, 9));