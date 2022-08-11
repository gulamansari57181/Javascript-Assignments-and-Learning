//In layman terms generator is a function which has pause and excute scenario

function* greet() {
    yield "Hi";
    yield "Hello";
    yield "Namaste";
    return "All done";
}

//Creating iterator(object) for generator

let iterator = greet();
console.log(iterator.next()); // {value:"Hi", done :false}
console.log(iterator.next()); //{ value: 'Hello', done: false }
console.log(iterator.next()); //{ value: 'Namaste', done: false }
console.log(iterator.next()); //{ value: 'All done', done: true }
console.log(iterator.next()); //{ value: undefined, done: true }