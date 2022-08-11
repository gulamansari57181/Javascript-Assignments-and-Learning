//Symbols always create new and unique value bydefault

let sym1 = Symbol("gulam");

let sym2 = Symbol("gulam");

console.log(sym1 == sym2); //false
console.log(sym1 === sym2); //false

// To create Symbols to be similar in global scope we use for() method

let sym3 = Symbol.for("gulam");
let sym4 = Symbol.for("gulam");

console.log(sym3 == sym4); //true
console.log(sym3 === sym4); //true

// we cam also use Symbol to create private key in objects

let user = {
    name: "gulam",
    age: 29,
    [Symbol("email")]: "gulamansari57181@gmail.com",
};

// Now let us access each value of this objects

console.log(user);

// {
//     name: 'gulam',
//     age: 29,
//     [Symbol(email)]: 'gulamansari57181@gmail.com'
//   }

//only private key
console.log(Object.getOwnPropertySymbols(user));
//output -> [ Symbol(email) ]

//only public

console.log(Object.getOwnPropertyNames(user));

//[ 'name', 'age' ]