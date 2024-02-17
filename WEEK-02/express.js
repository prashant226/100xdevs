// const fs = require('fs');
const express = require("express");
const app = express();
const port = 3000;
// const bodyParser = require("body-parser");

// app.get("/router-handle", function(req, res) {
//     res.send("hello world");
//     res.json({
//         name: "harkirat",
//         age: 21
//     })
// })
//middleWare
// app.use(bodyParser.json());
// app.post('/', (req, res) => {
//     //db call 1sec
//     console.log(req.body);
//     res.send({
//         msg: "2+2=4"
//     });
// })

// app.listen(port, function() {
//     console.log(`the app is been running on ${port}`)
// })



//req , res => request and response...
// app.get("/", function(req, res) {

// })


const users = [{
    name: "hkirat",
    kidneys: [{
            healthy: false
        }
        // {
        //     healthy: true
        // }
    ]

}];
app.get("/", function(req, res) {
    const johnKidney = users[0].kidneys;
    const numberOfKidney = johnKidney.length;
    //filter
    let numberOfKidneyHealthy = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy) {
            numberOfKidneyHealthy = numberOfKidneyHealthy + 1;
        }
    }
    const numberOfKidneyUnHealthy = numberOfKidney - numberOfKidneyHealthy;
    res.json({
        johnKidney,
        numberOfKidneyHealthy,
        numberOfKidneyUnHealthy
    })

})
app.use(express.json())
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done re"
    })
})
app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});

})


//remove all unhealthy kidneys
app.delete("/", function(req, res) {

    let oneUnhealthykidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {

    }

    const newKidney = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({ msg: "done" })
})
app.listen(3000);