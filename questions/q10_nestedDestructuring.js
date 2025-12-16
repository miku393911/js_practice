// Q10
const settings = {
    theme: "dark",
    location: {
        city: "Tokyo",
        zip: "100-0001"
    }
};
const { location: { city } } = settings; //オブジェクトの中からオブジェクトを取りたい場合は{}を付ける！
console.log(city); // Expected: Tokyo
