const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(2255, ()=>{
    console.log("listening on port 2255");
})