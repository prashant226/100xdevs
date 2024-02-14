// class Animal {
//     constructor(name, legCount) {
//         this.name = name
//         this.legCount = legCount
//     }
//     describe() {
//         return `${this.name} has ${this.legCount} legs`
//     }
// }

// class Animal {
//     constructor(name) {
//         this.name = name;

//     }
//     speak() {
//         console.log(`${this.name} makea a noise.`);

//     }
// }

// class Animal {
//     constructor(name, legcount, speaks) {
//         this.name = name;
//         this.legcount = legcount;
//         this.speaks = speaks;

//     }
//     speaks() {
//         console.log("hi there" + this.speaks);
//     }
// }

// console.log(Animal.myType())
// let dog = new Animal("dog", 4, "bhow bhow");
// let cat = new Animal("cat", 4, "meow meow");
// cat.speaks();

// const currentData = new Date();
// // console.log(currentData.getDate());
// // console.log(currentData.getYear() + 1900);
// // console.log("time in milliseconds since 1970", currentData.getTime());

// function calculateSum() {
//     const a = 0;
//     for (let i = 0; i < 10000; i++) {
//         a = a + i;
//     }
//     return a;
// }

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;

}

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;

}

sumOfSomething(1, 2, cube)