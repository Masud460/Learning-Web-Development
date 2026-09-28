/// Closure
// function createCounter() {
//     let count = 0;
//     return function () {
//         console.log(++count);
//     }
// }

// const fn1 = createCounter();
// const fn2 = createCounter();
// fn1()
// fn1()
// fn2()
// fn2()
// fn2()

// console.dir(fn2);

/// Hoisting + Scope
// var x = 10;

// function test() {
//     console.log(x);
//     var x = 20;
//     console.log(x);
// }

// test()
// console.log(x);

// let x = 10;

// function test() {
//     console.log(x);
//     let x = 20;
// }

// test()

// var x = 10;

// function outer() {
//   var x = 20;

//     function inner() {
//         console.log(x);
//     }
//     inner()
// }

// outer()

//// Level 2 - Execution Context

// const x = 1;

// function first() {
//     const x = 2;
//     second();
// }

// function second() {
//     console.log(x);
// }

// // first()

// let x = 'global'

// function outer() {
//     let x = 'outer';

//     function inner() {
//         let x = 'inner';
//         console.log(x);
//     }
//     inner()
// }

// outer()

function one() {
  const value = "one";

  function two() {
    const value = "two";

    function three() {
      console.log(value);
    }
    three();
  }
  two();
}
one()
