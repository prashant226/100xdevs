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

class Animal {
    constructor(name, legcount, speaks) {
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;

    }
    speaks() {
        console.log("hi there" + this.speaks);
    }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
cat.speaks();