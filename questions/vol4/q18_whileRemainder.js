// 18. 変数 `a` と `b` の最大公約数を、ユークリッドの互除法（while文）を使って求めて出力してください。
let a = 3;
let b = 9;
while(b !== 0){
    let remainder = a % b; // まずは余りを計算
    a = b;  // aにbを代入
    b = remainder;  // bに余りを代入
}
console.log(a);  // そしてaを出力する