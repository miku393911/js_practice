// 2. 変数 `num` の絶対値を計算して出力してください。（`Math.abs` は使用禁止。if文で実現すること）
// Math.abs()はJavaScriptのメソッドで、絶対値を計算してくれる（absolute value: 絶対値
const num = -3;
if(num < 0){
    console.log(num*(-1)); // 絶対値は0からいくつ離れているか、負の数に-1を掛けて正の数にする
}else{
    console.log(num);  // 正の数はそのまま値を返して正解
}