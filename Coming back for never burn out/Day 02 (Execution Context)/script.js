//// Answer these

// var x = 45;

// function letRun() {
//     var x = 34;
//     console.log(x);
// }

// letRun();
// console.log(x);

//// Answer these
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 20;
// const c = 30;

//// Answer these
// sayHello();
// function sayHello() {
//     console.log('Hello, Ataullah');
// }

// It works because the function defination is allocated in the loading phase, so that's why in the execution phase it has the function saved;

//// Answer these
// let x = 1;

// function one() {
//     let x = 2;
//     two();
// }

// function two() {
//     let x = 3;
//     console.log(x);
// }

// one()
// / It prints 3;

// Answer these
// let x = 'global';

// function outer() {
//     let x = 'outer';

//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }

// const fn = outer();

// x = 'changed';
// fn()

/// I didn't catch it. I think the reason is, I didn't know that the global scope cannot change a function scope variable.

//// Answer these
// var x = 1;

// function foo() {
//     console.log(x);
//     var x = 2;
//     console.log(x);
// }
// foo()

//// Answer these

// var x = 10;
// function outer() {
//     var x = 20;
//     function inner() {
//         console.log(x);
//     }
//     inner()
// }
// outer()

//// Answer these
// let x = 1;
// function test() {
//     console.log(x);
// }
// function run() {
//     let x = 2;
//     test()
// }
// run()

/// test
console.log(x);
var x = 3;

function test(a, b) {
  console.log(this);
  testTwo(1, 3);
}

function testTwo(a, b) {
  console.log(this);
  var x = 1;
}

test(2, 4);
