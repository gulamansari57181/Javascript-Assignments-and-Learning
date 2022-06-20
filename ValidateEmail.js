let emailOne = "gulamansari@gmail.com";
let emailTwo = "2018c05@.edu.in";

function validateEmail(email) {
    if (email.endsWith("@gmail.com")) {
        console.log(email + ":  is a valid email");
    } else {
        console.log(email + ": not a valid email");
    }
}

validateEmail(emailOne);
validateEmail(emailTwo);