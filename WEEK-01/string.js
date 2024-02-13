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