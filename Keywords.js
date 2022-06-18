// true or false keyword

let nameOne = "Rahul";
var nameTwo = "Ritesh";

console.log(nameOne === nameTwo); //false
console.log(nameOne == nameTwo); //false

var nameTwo = "Rahul";
console.log(nameOne === nameTwo); //true
console.log(nameOne == nameTwo); //true

// typeof keyword

console.log(typeof " Gulam"); //string
console.log(typeof 1); //number

// for keyword

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* output :
0
1
2
3
4 */

//function and return keyword

function squareOfNum(num) {
    let ans = num * num;
    return ans;
}
result = squareOfNum(5); //function invoked
console.log(result); // 25

// if else

if (5 === "5") {
    console.log("number and strings are equal");
} else {
    console.log("numbers and strings are not equal");
}

//output: numbers and strings are not equal