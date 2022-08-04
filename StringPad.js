//String.padStart() is used to add expected amount of numbers or characters in start of the string

/* The padStart() method pads the current string with another string 
    (multiple times, if needed) until the resulting string reaches the given length. 
    The padding is applied from the start of the current string.
    */

const ACCOUNT_NO = "58528286565";

//to make Account no 16 digit we can add extra zeros at start
console.log(ACCOUNT_NO.padStart(16, "*"));

//output : ****58528286565

//to make Account no 16 digit we can add extra zeros at end
//Output : 58528286565****
console.log(ACCOUNT_NO.padEnd(16, "*"));