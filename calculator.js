//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//define route
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

// console.log(req.body.num1);

//spin up server
app.listen(3000, function(){
    console.log("Server started on port 3000");
});