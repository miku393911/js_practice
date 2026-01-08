// 17. 配列 `inputs = ["no", "no", "yes", "no"]` を順にチェックし、"yes" が出たら「承認されました」と出力して処理を終了してください。
const inputs = ["no", "no", "yes", "no"];
let i = 0;
while(i < inputs.length){
    if(inputs[i] === "yes"){
        console.log("承認されました");
        break;  // 問題文の　処理を終了してください という指示があるため
    }
    i++;
}