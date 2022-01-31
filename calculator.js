//jshint esversion:6

const express = require("express");

const app = express();

//define route
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
});

//spin up server
app.listen(3000, function(){
    console.log("Server started on port 3000");
});