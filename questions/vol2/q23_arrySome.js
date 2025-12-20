// Q23
const scores = [80, 10, 50, 100, 30];  //.every()メソッドという、全ての条件を満たすという意味
const hasExcellent = scores.some( (score) => score >= 90);  //.score()メソッドは、少なくとも1つの条件を満たすという意味で使われる
console.log(hasExcellent); // Expected: true