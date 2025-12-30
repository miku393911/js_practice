// 24. 配列 `numbers` に含まれる重複した要素を取り除き、ユニークな値だけの新しい配列を作成してください。（`Set`禁止、ループで確認すること）
const numbers = [39, 6, 25, 39];
let newArr = [];  // 新しい配列を変数保存
for(let i = 0; i < numbers.length; i++){
    if(!newArr.includes(numbers[i])){ // 新しい配列が、配列の要素を含んでいない場合
        newArr.push(numbers[i]);  // 新しい配列に、配列の要素を追加していく
    }
}
console.log(newArr);