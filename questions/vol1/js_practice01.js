const fizzBuzz = () => {
  // 👇 ここに for文 と if文 を使って書いてください
    for (let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
};
fizzBuzz();

const findMax = (numbers) => {
    let maxVal = numbers[0]; // 最初の要素を仮の最大値とする
  // 👇 ここにループ処理を書いて、maxVal より大きい数字があったら maxVal を更新する処理を書いてください
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > maxVal){
            maxVal = numbers[i];
        }
    }
    return maxVal;
};
const scores = [10, 50, 80, 20, 95, 30];
console.log(`最高得点: ${findMax(scores)}点`); // 出力: 95点

const getStatusMessage = (status) => {
  // 👇 ここに switch文 を書いてください
    switch(status){
        case "success": return "成功しました!";
        case "error":  return "エラーが発生しました";
        case "loading": return "読み込み中...";
        default : return "不明なステータスです";
    }
};
console.log(getStatusMessage("success")); // 成功しました！
console.log(getStatusMessage("loading")); // 読み込み中...
console.log(getStatusMessage("unknown")); // 不明なステータスです

const cartItems = [
    { name: "Tシャツ", price: 2000, count: 2 },
    { name: "キャップ", price: 1500, count: 1 },
];
const calculateTotal = (items) => {
  // 👇 ここに処理を書いてください
    let total = 0; //合計金額を入れる変数を作る
    for(let i = 0; i < items.length; i++){ //く繰り返し処理をして配列や配列の中のオブジェクトの処理を回して結果を求める
        total = total + (items[i].price * items[i].count); //現在のtotalを計算したいため、total = total + ()の形で書く
    }
    if(total < 5000){
        total = total + 500;
    }
    return total;
}
console.log(`支払い合計: ${calculateTotal(cartItems)}円`);

class User {
  // 👇 ここにクラスの中身を書いてください
    constructor(name, age){ //ここはコンストラクタだけの部屋にする（渡されたデータを自分自身に保存する処理だけする）
        this.name = name;
        this.age = age;
    }
        greet(){
            console.log(`こんにちは、私は${this.name}です`);
        }
        isAdult(){
            if(this.age >= 20){
                return true;
            }
            if(this.age < 20){
                return false;
            }
        }
}
//インスタンス
const user1 = new User("田中", 25);
const user2 = new User("佐藤", 18);
user1.greet(); // 出力: こんにちは、私は田中です。
console.log(user1.isAdult()); // 出力: true
console.log(user2.isAdult()); // 出力: false
class Character {
    constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    }
    attack() {
    console.log(`${this.name}の攻撃！`);
    }
}
// 👇 Heroクラスをここに書いてください
class Hero extends Character{
    constructor(name, hp){ //コンストラクタは親の引数を継承し（superも同様）これだけしか書かない
        super(name, hp);
    }
    attack(){
        console.log(`${this.name}は勇者の剣で攻撃した!`);
    }
    superAttack(){
        console.log(`${this.name}の超必殺技!100のダメージ!`);
        this.hp = this.hp - 10;
    }
}
// 実行テスト
const hero = new Hero("勇者", 200);
hero.attack();       // 出力: 勇者は勇者の剣で攻撃した！
hero.superAttack();  // 出力: 勇者の超必殺技！100のダメージ！
console.log(hero.hp); // 出力: 190

const users = [
    { id: 1, name: "佐藤", age: 25, isActive: true },
    { id: 2, name: "鈴木", age: 19, isActive: false },
    { id: 3, name: "高橋", age: 30, isActive: true },
    { id: 4, name: "田中", age: 22, isActive: false },
];
// 1. アクティブなユーザーだけを抽出 (filter)
const activeUsers = // 👇 ここに書いてください
    users.filter((user) => 
        user.isActive === true
    );
// 2. アクティブなユーザーの名前だけの配列を作る (map)
const userNames = // 👇 ここに書いてください
    activeUsers.map((user) => {
        return user.name;
    })
// 3. IDが3のユーザーを探す (find)
const targetUser = // 👇 ここに書いてください
    users.find((user) => 
        user.id === 3
    )
console.log(activeUsers); // 佐藤さんと高橋さんのオブジェクトが表示される
console.log(userNames);   // ["佐藤", "高橋"]
console.log(targetUser);  // 高橋さんのオブジェクト

// 1. 関数を定義
const processNumbers = (numbers, callback) => {
    const results = [];
    // 👇 ここで forEach などを使い、callbackを実行して results に push してください
    numbers.forEach((number) => { //forEachは値を返さないため、returnは不要
        results.push(callback(number));
    });
    return results;
};
const data = [1, 2, 3, 4];
// 2. 呼び出し (アロー関数で「2倍にする処理」を渡す)
const doubled = processNumbers(data, (num) => {
    // 👇 ここに処理を書く
    return (num * 2);
});
console.log(doubled); // [2, 4, 6, 8]
const add = (a, b) => a + b;
// --- main.js ---
// 👇 ここで import してください
console.log(add(5, 3)); // 8