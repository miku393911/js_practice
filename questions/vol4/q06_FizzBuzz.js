// 6. 変数 `n` が 3の倍数なら "Fizz"、5の倍数なら "Buzz"、両方の倍数なら "FizzBuzz"、それ以外ならその数値を出力してください。
const n = 39;
if(n % 3 === 0 && n % 5 === 0){ // 15で割り切れるものとしても良い
    console.log("FizzBuzz");
}else if(n % 3 === 0){
    console.log("Fizz");
}else if(n % 5 === 0){
    console.log("Buzz");
}else{
    console.log(n);
}