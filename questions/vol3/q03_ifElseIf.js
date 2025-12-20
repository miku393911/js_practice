// 3. 変数 `score` が 80 以上なら「A」、60 以上 80 未満なら「B」、それ以外なら「C」と出力してください。
const score = 77;
if(score >= 80){
    console.log("A");
}else if(score >= 60 && score < 80){ //最適解 else if(score <= 60)これだけで通じる、上限はif文で決まっているため
    console.log("B");
}else{
    console.log("C");
}