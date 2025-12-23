// 23. 配列 `[1, 5, 8, 10, 15]` の中から、10 以上の数値だけをループで取り出して出力してください。
const numbers = [1, 5, 8, 10, 15];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 10){
        console.log(numbers[i]);
    }
}
// 現場向け
for(const number of numbers){
    if(number >= 10){
        console.log(number);
    }
}

// 少々扱いが異なるが、別の処理で使いたい場合は.filter()メソッドが使える
const filter = numbers.filter( (number) => number >= 10);
console.log(filter);