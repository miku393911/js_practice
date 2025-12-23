// 21. for文を使って、配列 `[1, 2, 3, 4, 5]` のすべての要素を順番に出力してください。
const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
//現場で使われる書き方
for(const number of numbers){
    console.log(number);
}
numbers.forEach( (number) => {
    console.log(number);
})