//Spread operator ...

// function sum(...numbers) {
//     return numbers.reduce((accumulator, current) => {
//         return (accumulator += current);
//     });
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5, 6));

const num = [1, 2, 3, 4, 5, 6, 7];
//Destructuring of an array
let [one, two, three, ...four] = num;

console.log(one); //1
console.log(two); //2
console.log(three); //3
console.log(four); //[4,5,6,7]