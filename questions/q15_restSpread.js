// Q15
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const [head, ...rest] = fruits;
console.log(head); // Expected: Apple
console.log(rest); // Expected: ["Banana", "Cherry", "Date"]
