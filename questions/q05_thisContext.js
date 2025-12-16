// Q5
const myObj = {
    value: "Hello",
    showArrow: () => console.log(this.value),
    showFunc: function () { console.log(this.value); }
};
// myObj.showArrow(); // undefined (or Error in strict mode environments/modules depending on context)
// myObj.showFunc(); // "Hello"
console.log("答え: アロー関数は作成された場所の外側のthis（今回はグローバル）をそのまま使うのでthis.valueが見つからずundefinedになります。一方、通常の関数は誰が呼び出したかによってthisが変わるたため、呼び出し元のmyObjがthisになり、その中身を表示できます。");
