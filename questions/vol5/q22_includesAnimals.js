// 22. 配列 `["cat", "dog", "bird"]` の中に "dog" が含まれているかを `includes` を使って確認し、`true` または `false` を出力してください。
const animals = ["cat", "dog", "bird"];
if(animals.includes("dog")){
    console.log(true);
}else{
    console.log(false);
}

// if文を使わずに書ける、.includes()メソッドは真偽値を返す
console.log(animals.includes("dog"));