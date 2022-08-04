/* null is an object whose value is "no object" 
In JavaScript, undefined means a variable has been declared but has not yet been assigned a value , null is special object value

undefined is predffined global objects ,undefined property indicates that a variable has not been assigned a value including null too
Both of them are representing a value of a variable with no value */

let num1;

console.log(num1);

num2 = null;

console.log(num2);

console.log(num1 == num2);

console.log(num1 === num2);

/* Output :
undefined
null
true
false */

// false values

// null
// undefined
// NaN
// 0
// -0
// ""

// No divide by zero error in fact we have : Infinity

/* Infinity is a property of the global object. In other words, it is a variable in global scope.
The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number.
Two types of global object : Node and Browser window

if we are using node then node is a global object and if we are  using browser
 then browser window is called global object.
  When we deals with backend server with javascript then surely node is global object in that case

 */
if (!NaN) {
    console.log("NaN is not a number");
    console.log(2 / 0);
}

//output :
/* NaN is not a number
Infinity */