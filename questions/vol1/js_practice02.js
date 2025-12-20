/*const r = 5;
// 👇 ここにコードを書いてください
const area = 3.14*(r**2);
console.log(area);

/*const name = "Ken";
const age = 25;
// 👇 ここにコードを書いてください
console.log(`私の名前は${name}で、${age}歳です。`);

/*const val = 0;
// 👇 ここにコードを書いてください
console.log(val ? "OK" : "NG");  //Truthyから書く（if文や三項演算子に限らず）*/
/*if(val){
    console.log("OK");
}else{
    console.log("NG");
}

/*const score = 75;
// 👇 ここにコードを書いてください
if(score  >=  80){
    console.log("合格");
}else{
    console.log("不合格");
}

/*const rank = "B";
// 👇 ここにコードを書いてください
switch(rank){
    case "A": console.log("素晴らしい");
    break;
    case "B": console.log("良い");
    break;
    case "C": console.log("頑張ろう");
    break;
    default : console.log("不明");
    break;
}

// 👇 ここにコードを書いてください
/*for(let number = 1; number <=10; number++){
    console.log(number);
}

/*let count = 5;
// 👇 ここにコードを書いてください
while(count > 0){
    console.log(count); //先に表示してからその後数字を1ずつ減らす
    count--;  //console.log(count)の結果が0になった後、1減らそうとしたらfalseになってループを抜ける
}

// 👇 ここにコードを書いてください
//const getMax = function(a, b){ //const getMax = (a, b) => {}でも可
    //定数名に関数を定義して、引数を取るなり関数を呼び出すなりしてアロー関数かfunction()で書く
  //  return (a > b) ? a: b;
    /*if(a > b){
        return a;
    }else{
        return b;
    }*/
//}
//console.log(getMax(3, 9));

// 👇 ここにコードを書いてください
/*const isLongString = (text) => text.length >= 5;
console.log(isLongString("Hello"));

// 👇 ここにコードを書いてください
/*const sayHello = (name="Guest") => `Hello, ${name}!`;
console.log(sayHello());  //デフォルト引数は関数を呼び出すだけでOK（もちろん、定数名に関数を定義した時の引数に、 =""みたいな感じで書くのは必須

/*function createMessage() {
    const message = "Secret";
}
createMessage();
console.log(message); // エラー！*/
// 👇 ここに修正したコードを書いてください
/*function createMessage() {
    const message = "Secret";  //関数の中で定義された変数を関数の外で使えるように、だから中においたままreturnで変数だけ返す（外に書いても良）
    return message;
}
createMessage();
console.log(createMessage());*/

/*const colors = ["red", "blue", "yellow"];
// 👇 ここにコードを書いてください
colors.push("green");
colors.shift();  //.shift()メソッドで最初の要素を削除（シフトして追い出す、ずらして削除するイメージ）
console.log(colors);*/

/*const numbers = [10, 20, 30];
// 👇 ここにコードを書いてください
numbers.forEach( (num) => {
    console.log(num*2);  //returnは無意味、.forEach()メソッドは値を返さない
})*/

/*const user = {
    userName: "Ken",
    address: {
        city: "Tokyo",
        zip: "100-0001"
    }
};
// 👇 ここにコードを書いてください
console.log(user.address.city);*/

/*const products = [
    { productName: "消しゴム", price: 100 },
    { productName: "ノート", price: 200 },
    { productName: "万年筆", price: 1200 },
    { productName: "手帳", price: 1500 },
];
// 👇 ここにコードを書いてください
for(let i = 0; i < products.length; i++){ //for(){}で繰り返し処理を行うことができ、{}の中に処理を書くか{}を付けない代わりに;も付けない
    if(products[i].price >= 1000){
        console.log(products[i].productName);
    }
}*/

/*const person = { name: "Taro"};
// 👇 ここにコードを書いてください
console.log(person.age ? person.age : "年齢不詳");  //person.ageが2回続いているため、論理演算子で書いても良い person.age || "年齢不詳"*/

/*const nums = [1, 2, 3, 4, 5, 6];
// 👇 ここにコードを書いてください
const evenNumbers = nums.filter( (num) => //returnと{}を書いてもOK
    num % 2 === 0
)
console.log(evenNumbers);  //配列は関数ではなくデータなので、()を付けて中の処理を呼び出すとかはない！*/

/*const names = ["alice", "bob", "charlie"];
// 👇 ここにコードを書いてください
const upperNames = names.map( (name) =>
    name.toUpperCase() //大文字を表現したい時は.toUpperCase()メソッド、小文字は.toLowerCase()メソッドを使う
)
console.log(upperNames);*/

/*const usersData = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
];
// 👇 ここにコードを書いてください
const target = usersData.find( (date) =>
    date.id === 3
)
console.log(target);*/

// filter と map をつなげて書いてみましょう。
/*const items = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 200 },
    { name: "Cherry", price: 1000 },
];
// 👇 ここにコードを書いてください
const newItems = items
.filter((item) => item.price <= 500) //.filter()メソッドで絞り込んで
.map((item) => item.name) //.map()メソッドで新しい配列を作る
console.log(newItems);*/

/*const a = 12;
const b = 8;
// 👇 ここにコードを書いてください
console.log(
    (a >= 10 && b >= 10) ? "Excellent" :   //論理演算子において、2つ以上の複数の条件を扱う場合はネスト（入れ子構造）　にする
    (a >= 10 || b >= 10) ? "Good" : "Bad"
);*/
/*if( a >= 10 && b >= 10){ /if文バージョン
    console.log("Excellent");
}
else if(a >= 10 || b >= 10){
    console.log("Good");
}else{
    console.log("Bad");
}*/

/*const settings = {
    theme: "dark",
    notifications: true,
};
// 👇 ここにコードを書いてください
settings.theme = "light";
settings.isAdmin = true;
console.log(settings);*/

/*const fruits = ["apple", "grape", "orange"];
// 👇 ここにコードを書いてください
console.log(fruits.includes("banana") ? "あります" : "ありません");*/ //三項演算子で書くバージョン
/*if(fruits.includes("banana")){ //if文で書くバージョン
    console.log("あります");
}
else{
    console.log("ありません");
}*/

/*const inputScore = 105;
// 👇 ここにコードを書いてください
console.log( 0 <= inputScore && inputScore <= 100 ? "有効な点数です" : "無効な点数です");  //論理演算子で書くバージョン
if(0 <= inputScore && inputScore <= 100){ //if文で書くバージョン
    console.log("有効な点数です");
}else{
    console.log("無効な点数です");
}*/

/*const cart = [
    { item: "Book", price: 1500 },
    { item: "Pen", price: 200 },
    { item: "Note", price: 300 },
];
// 👇 ここにコードを書いてください
let sum = 0;  //最初の定義、初期化して空の変数を作っておく　積み上げ計算をする時やスコープ外で変数を使いたい時（計算は中でやるけど結果は外で使いたい時）に用いる（元の値がないとダメ
for(let i = 0; i < cart.length; i++){
    sum = (sum + cart[i].price);
}
console.log(sum);*/
/*cart.forEach((add) => sum = sum + add.price);  //.forEach()メソッドで書くバージョン
console.log(sum);*/

// 👇 ここにコードを書いてください
/*class Animal{ //クラスを作成
    constructor(name){
        this.name = name;  //プロパティを保存
    }
    speak(){
        console.log(`${this.name}が鳴いています`);  //処理を書く
    }
}
const myPet = new Animal("cat");  //インスタンスを作成（新しい変数を作る
myPet.speak();  //インスタンスバージョンで処理をする*/

// 👇 ここにコードを書いてください
/*class Dog extends Animal{ //継承してインストラクタをオーバーライドしている
    speak(){ //継承しているから引数を書く必要はない
        console.log(`${this.name}: ワンワン！`);
    }
}
const myDog = new Dog("Dog"); //インスタンスを作り、さっき作った継承済みのクラスを使う（Dogのこと）
myDog.speak();*/

// const multiply = (a, b) => a * b;
// 👇 ここにコードを書いてください
//export const multiply = (a, b) => a * b;  名前付きexportはそのままコードを書くイメージ/ export defaultは{}を書く

// 👇 ここにコードを書いてください
/*const repeat = (n, action) => { //引数を2つ取り、n回繰り返す
    for(let i = 0; i < n; i++){
        action();  //action()で、action()関数を実行している
    }
}
repeat(3, () => console.log("Hello!"));  //repeat関数の引数の値を書く（nとactionの実行内容）*/

// 👇 ここにコードを書いてください
class TodoList{
    constructor(todos){
        this.todos = [] //コンピューターのメモリの中にある情報のこと（todos）
    }
    add(task){
        this.todos.push(task);  //taskを引数に（掃除を追加するよ〜）
    }
    show(){
        this.todos.forEach( (item) => console.log(item)); //Node.js上で（ターミナル上で文字を表示する）人間が分かるように
    } //データを1つずつ丁寧に取り扱うために.forEach()メソッドを使う/ 各データを簡単に加工することができる
}
const MyTodo = new TodoList();
MyTodo.add("掃除");
MyTodo.show();