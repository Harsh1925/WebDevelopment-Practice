const express = require("express")
const app = express();
const path = require("path");
const radditdata = require("./data.json")

app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, '/views'))


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand: num })
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = radditdata[subreddit];
    res.render("subreddit", { ...data })  //http://localhost:3000/r/mightyharvest
})

app.get("/cats", (req, res) => {
    const cats = ["Monty", "Rae", "Fuslie", "Evon", "Jasmin"]
    res.render("allCats", { cats })
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})