// 30. 引数 `price` を受け取り、消費税 10% を加えた数値（price * 1.1）を返す関数 `getTaxIncluded` を定義してください。
const getTaxIncluded = (price) => (price * 1.1); // 本来は{}とreturnが入る
console.log(getTaxIncluded(100));

/* 最適解
出力結果が、110.00000000000001で小数点以下が長いので、Math.floor()で切り捨て可能
また、1.1の税率が変わる場合も想定して、TAX_RATEに設定するのも良い*/