// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100() {
//     return findSum(100);
// }

// setTimeout(findSumTill100, 1000)
// console.log("hello world");

// const fs = require('fs');

// function kiratReadFile() {
//     console.log("inside promise")
//     return new Promise(function(resolve) {
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             resolve(data);
//         });
//     })
// }


// function onDone(data) {
//     console.log(data)
// }

// kiratReadFile().then(onDone);

// var d = new Date();
// console.log(d.getDate());

// var d = new Promise(function(onDone) {
//     setTimeout(function() {
//         resolve("foo");
//     }, 1000)
// });

// function callback() {
//     console.log(d);
// }
// d.then(callback);

// let p = new Promise(function(resolve) {
//     resolve("hi there");
// });

// p.then(function() {
//     console.log(p);
// })



// function kiratAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         setTimeout(resolve, 2000)
//     });
//     return p;
// }

// const value = kiratAsyncFunction();
// value.then(function() {
//     console.log("hi there");
// })

/**ASYNC AND AWAIT.... */

function kiratAsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("hi there")
        }, 3000)
        resolve("hi there")
    });
    return p;
}




async function main() {
    let value = await kiratAsyncFunction()
    console.log(value);
}
main();