/* A program to validate phone number
 weather it is starting
  with "+91" followed by 10 digits or not by converting number to string */

let number1 = "919699733925";

let number2 = "91969973392";

function validateNumber(number) {
    if (number.startsWith("91", 0) && number.length == 12) {
        console.log(number + " Is valid number");
    } else {
        console.log(number + " Is not a valid number");
    }

    return;
}
validateNumber(number1);
validateNumber(number2);