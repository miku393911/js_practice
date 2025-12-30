// 21. 配列 `numbers` の中に、特定の数値 `target` (例: 5) が何個含まれているかを数えて出力してください。
const numbers = [39, 6, 25];
const target = 39;
let count = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === target){
        count++;
    }
}
console.log(count);

// メソッドを使うと...
const filterNumber = numbers.filter((number) => number === target);
console.log(filterNumber.length);  // 配列であるため.length()メソッドを付けることができる