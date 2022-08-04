//In javascript string is an immutable objects

let myName = "Mohd Gulam Ansari";

//string length is a property

console.log(myName.length);

/* The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

    The substring() method extracts characters from start to end (exclusive).

    The substring() method does not change the original string.

    If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

    Start or end values less than 0, are treated as 0. */

console.log(myName.substring(0));

console.log(myName.substring(0, 6));

console.log(myName.substring(6, 0));

console.log(myName.substring(0, 12));

//negative argyment traeted as 0
console.log(myName.substring(-3));