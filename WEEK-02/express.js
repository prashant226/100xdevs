// const fs = require('fs');
const express = require("express");
const app = express();
const port = 3000;


app.get('/', function(req, res) {
    //db call 1sec
    res.send('hello world');
})

app.listen(port, function() {
    console.log(`the app is been running on ${port}`)
})