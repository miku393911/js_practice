// 17. 変数 `isCorrect` が `false` の間ループし続け、ループ内で特定の条件（例：iが3になったら）で `isCorrect` を `true` にしてループを抜ける処理を書いてください。
let isCorrect = false;
let i = 0; //isCorrect === falseは、中身がfalseで初期値もfalseで一致しているため、trueとして中の処理が実行される
while(isCorrect === false){ //最適解: !isCorrect　だとfalseじゃないということでtrueとして中の処理が実行される
    console.log(isCorrect);
    if(i === 3){
        isCorrect = true;
        console.log(isCorrect);
    }
    i++;
}