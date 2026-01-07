// 15. 変数 `balance`（残高）を 1000 とし、ループするたびに 150 ずつ減らしていき、残高がマイナスになる手前までの各残高を出力してください。
let balance = 1000;
while(balance > 0){
    console.log(balance);
    balance -= 150;
}