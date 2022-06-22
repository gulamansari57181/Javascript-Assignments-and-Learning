function generateOTP() {
    // Each digit will be choosen from this string
    let digits = "0123456789";

    // length of otp we wanted to make
    let otpLength = 6;

    let otp = "";

    for (let i = 1; i <= otpLength; i++) {
        //Math.ramdom() will give any value in the range of (0-1)
        var index = Math.floor(Math.random() * digits.length);

        otp = otp + digits[index];
    }

    return otp;
}

console.log(generateOTP());
/* 
Output :

180154
181416
372627 */