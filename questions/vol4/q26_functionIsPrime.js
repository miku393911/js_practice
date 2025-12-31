// 26. 正の整数 `n` を受け取り、それが素数であれば `true`、そうでなければ `false` を返す関数 `isPrime` を作成してください。
// 素数...1より大きい整数で、1と自分自身でしか割り切れない数
const isPrime = (n) => {
    if(n <= 1){ // つまり、1以下は素数ではないので false
        return false;
    }
    for(let i = 2; i < n; i++){ // 2スタートで、判定する数より小さく、ループを回す
        if(n % i === 0){ // 判定する数を 2以降で順番に割っていき余りが0になり割り切れると、素数ではないので false
            return false;
        }
    }
    return true; // それ以外で最後まで残ったものは素数のため true
}

console.log(isPrime(39));