var name = "harkirat";

function getLength(str) {
    console.log("original string", str);
    console.log("length:", str.length);
}
getLength("hello world");


function sum(a, b) {
    return a + b;
}
const ans = sum(2, 3);
console.log(ans);

function getSlice(str, start, end) {
    console.log("original string", str)
    console.log("after slice:", str.slice(start, end));

}
getSlice("hello world", 0, 5);


function cutIT(str, startIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i < endIndex)
            newStr = newStr + str[i];
    }
    return newStr;
}

const value = "harkirat singh";
let ans2 = value.slice(2, 5)
console.log(ans2)
console.log(cutIT(value, 2, 5));
const initialArray = [1, 2, 3];
const secondArray = [4, 5, 6];
console.log(initialArray.concat(secondArray));