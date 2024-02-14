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

const fs = require('fs');

function kiratReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })
}


function onDone(data) {
    console.log(data)
}

kiratReadFile().then(onDone);