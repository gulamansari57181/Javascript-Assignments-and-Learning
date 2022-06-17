// Block scope
// Global scope of variable x
// let x = 3; {
//     // Block scope of variable x
//     let x = 2;
//     console.log(x);
// }
// // Global value of x will be printed
// console.log(x);

let name = "Gulam Ansari";

function getName() {
    let name = "Mohd Gulam";
    console.log(name);
}
getName();