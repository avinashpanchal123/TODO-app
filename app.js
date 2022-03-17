const express = require("express");
const tasks = require("./tasks.json")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



app.set("view engine", "ejs");

app.use(express.static("public"))

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let date = d.getDate()
let output = [month, day, date].join(" ")


console.log(output);



app.get("/", (req, res) => {
 
  res.render("list", {kindOfDay : output, taskArr : tasks});
});

app.post("/", (req, res)=>{
    let newTask = (req.body.newTask);
    tasks.push(newTask)
    res.redirect("/")
})

app.listen(2255, () => {
  console.log("listening on port 2255");
});


