// 6. 変数 `age` が 20 以上なら「成人」、そうでなければ「未成年」と出力してください。
const age = 14;
if(age >= 20){
    console.log("成人");
}else{
    console.log("未成年");
}
//今回の問題はif,elseを使わなければいけないけれど、三項演算子も可
const message = age >= 20 ? "成人" : "未成年";
console.log(message);