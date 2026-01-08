// 18. 配列 `words = ["apple", "banana", "kiwi", "grape"]` から、文字数が 5文字以上の単語が見つかるまで順に出力し続けてください。
const words = ["apple", "banana", "kiwi", "grape"];
let i = 0;
while(i < words.length){
    console.log(words[i]);
    if(words[i].length >= 5) break;
    i++;
}

// for of で書くと...  勝手にループしてくれるので、i++ を書く必要はない
let number = 0;
for(const word of words){
    console.log(words[number]);
    if(words[number].length >= 5) break;
}