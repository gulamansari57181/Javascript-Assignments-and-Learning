//Arrow function to add two integers
var add1 = (a, b) => a + b;

//arrow function to add three numbers
var add2 = (a, b, c) => a + b + c;

let ans1 = add1(3, 6);
let ans2 = add2(3, 6, 7);

console.log(ans1); //9
console.log(ans2); //16

//Arrow functions are simple and easy to use, it is compact and its "this" has lexical scope i.e. parent scope.