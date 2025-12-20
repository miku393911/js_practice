// Q30. 商品リスト `products` から、「在庫あり(available: true)」かつ「価格(price)が1000円以上」の商品の「名前(name)」を抽出し、
// それらをカンマ区切りの1つの文字列として定形してください。
// (例: "Notebook, Scissors")
const products = [
    { name: "Pen", price: 100, available: true },
    { name: "Notebook", price: 1200, available: true },
    { name: "Eraser", price: 80, available: false },
    { name: "Marker", price: 1500, available: false },
    { name: "Scissors", price: 1100, available: true }
]; //今のままでも十分OK!
/*const productNames = products.filter( (user) => user.available === true && user.price >= 1000)
    .map((user) => user.name)
    .join(", ");
console.log(productNames); // Expected: Notebook, Scissors*/

//分割代入をして短縮させると
const productNames = products.filter(({available, price}) => available && price >= 1000)
    .map(({name}) => name)
    .join(", ");
console.log(productNames);