const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override")
const { v4: uuid } = require("uuid");


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')))

let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: " I like to live life on the edge"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: " What a beatiful day to go birdwatching"
    },
    {
        id: uuid(),
        username: "Sk009",
        comment: " Please deleter your account, Todd"
    },
    {
        id: uuid(),
        username: "onlysaywoof",
        comment: " woof woof woof"
    },
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments })
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new")
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect("/comments")
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id)
    res.render("comments/show", { comment })
})

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id)
    res.render("comments/edit", { comment })
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const oldComment = comments.find(c => c.id == id);
    oldComment.comment = newComment;
    console.log("HERE HERE")
    res.redirect("/comments")
})

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})

app.get("/tacos", (req, res) => {
    const { meat, qty } = req.query;
    res.send(`<h2><b>GET</b> request of ${qty} ${meat} tacos!</h2>`)
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`<h2><b>POST</b> request of ${qty} ${meat} tacos!</h2>`)
})

app.listen(8000, () => {
    console.log("Listining to Port 8000!")
})