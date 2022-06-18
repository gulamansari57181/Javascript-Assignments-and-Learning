const s1 = "\u00E9";
console.log(s1);

const s2 = "\u0065\u0301";
console.log(s2);
// Eventhough by just looking both the symbols appears to be same but there unicode characters are different moreever their length are also not same
console.log(s1.length == s2.length);
console.log(s1.length);
console.log(s2.length);

console.log(s1 === s2);
console.log(s1 == s2);