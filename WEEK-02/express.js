// const fs = require('fs');
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// app.get("/router-handle", function(req, res) {
//     res.send("hello world");
//     res.json({
//         name: "harkirat",
//         age: 21
//     })
// })
//middleWare
app.use(bodyParser.json());
app.post('/', (req, res) => {
    //db call 1sec
    console.log(req.body);
    res.send({
        msg: "2+2=4"
    });
})

app.listen(port, function() {
    console.log(`the app is been running on ${port}`)
})