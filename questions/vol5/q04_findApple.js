// 4. 果物が入った配列 `const items = ["みかん", "バナナ", "りんご", "ぶどう"]` の中に「りんご」があるか探し、見つけたら「見つけました！」と表示して、その瞬間にループを終了するプログラムを書いてください。
const items = ["みかん", "バナナ", "りんご", "ぶどう"];
for(let i = 0; i< items.length; i++){
    if(items[i] === "りんご"){
        console.log("見つけました！");
        break;
    }
}

// .includes()メソッドを使うと...
if(items.includes("りんご")){
    console.log("見つけました！");
}
// .find()メソッド使うと...
const foundItem = items.find((item) => item === "りんご");
if(foundItem){
    console.log("見つけました！");
}