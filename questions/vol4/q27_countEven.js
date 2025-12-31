// 27. 配列を受け取り、その中の偶数の数（個数）を返す関数 `countEvens` を作成してください。
const countEvens = (arr) => { // 配列を受け取るので、引数は空配列である（名前は配列名だが
    let count = 0;  // 偶数の個数を数える
    for(let i = 0; i < arr.length; i++){ // ループで回すが、配列の要素は下記の値で、配列は引数の名前
        if(arr[i] % 2 === 0){ // 空配列の要素が偶数ならば、偶数の個数が1増える
            count++;
        }
    }
    return count;  // return で返す
}
console.log(countEvens([39, 6, 25]));