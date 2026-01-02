// 10. 配列 `colors = ["Red", "Green", "Blue"]` のすべての要素を for文を使って順番に出力してください。
const colors = ["Red", "Green", "Blue"];
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

 // for ofを使って...
for(const color of colors){
    console.log(color);
}

// .forEach()メソッドを使って...
colors.forEach((color) => console.log(color));

colors.map((color) => console.log(color));  // 今回は出力のみのため、.map()メソッドを使って新しい配列を作る必要はない