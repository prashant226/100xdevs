const express = require('express')
const port = 3000;
const app = express();


//create a Todo app

app.get('/', function(req, res) {
    //db call
    // let a = 0;
    // console.log("request has been reached");
    // for (let i = 0; i < 100000000; i++) {
    //     a = a + 1;
    // }
    res.send('hello world')
})

app.listen(port)