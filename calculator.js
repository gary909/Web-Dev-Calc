//jshint esversion:6

const express = require("express");

const app = express();

//define route
app.get("/", function(request, response){
    response.send("hello");
});

//spin up server
app.listen(3000, function(){
    console.log("Server started on port 3000");
});