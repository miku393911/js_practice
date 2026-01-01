// 3. 名前が入った配列 `const names = ["田中", "佐藤", "鈴木"]` を使い、全員分「こんにちは、〇〇さん」と出力するプログラムを書いてください。
const names = ["田中", "佐藤", "鈴木"];
for(let i = 0; i < names.length; i++){
    console.log(`こんにちは、${names[i]}さん`);
}

// for ofを使うと...
for(const name of names){
    console.log(`こんにちは、${name}さん`);
}
// .forEachメソッド()を使うと...
names.forEach((name) => console.log(`こんにちは、${name}さん`));