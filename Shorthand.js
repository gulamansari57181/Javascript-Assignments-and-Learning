let number1 = 1000000000000;
let number2 = 10e11;

console.log(number1);
console.log(number2);

/* Output :
        1000000000000
        1000000000000 */

/* Shorthand */
i++;
j--;

/* Longhand */

i = i + 1;
j = j - 1;

/* Shorthand */
var i,
    j = 5,
    k = "Good morning",
    l,
    m = false;

/* Longhand */
var i;
var j = 5;
var k = "Good morning";
var l;
var m = false;

/* Shorthand */
var message = age >= 18 ? "Allowed" : "Denied";

/* Longhand */
if (age >= 18) {
    var message = "Allowed";
} else {
    var message = "Denied";
}