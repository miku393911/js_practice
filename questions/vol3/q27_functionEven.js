// 27. 1つの引数を受け取り、その数が偶数なら `true`、奇数なら `false` を返す関数 `isEven` を定義してください。
/*const isEven = (number) => {
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(3));*/

//現場向き
// 真偽値そのものを返すことができる
const isEven = (num) => num % 2 === 0; //偶数をかどうか判定
console.log(isEven(3)); // 上記の関数に値を渡して判定、falseが返る
console.log(isEven(4)); // trueが返る