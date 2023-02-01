const express = require("express");

const app = express()

// app.use((req, res) => {
//     console.log("We got a new request!")
//     res.send("<h1>Hello World</h1>")
//     res.send("Hello World")
// })

app.get("/", (req, res) => {
    res.send("<h1>This is home page!!</h1>")
})

app.get("/cats", (req, res) => {
    res.send("<h1>Meow!!</h1>")
})

app.get("/dogs", (req, res) => {
    res.send("<h1>Woof!!</h1>")
})

app.get("/r/:sub/:postid", (req, res) => {
    const { sub, postid } = req.params;
    res.send(`<h1>This ${sub} with id of ${postid}`)
})

app.get("/search", (req, res) => {
    const { q } = req.query;
    console.log(req.query)
    console.log(q)
    res.send(`<h1> Search result for : ${q}<h1>`)  //http://localhost:8080/search?q=dog&color=red
})

app.get("*", (req, res) => {
    res.send("<h1>I don't know that path!!</h1>")
})

app.listen(8080, () => {
    console.log("Listening to port 8080!")
})

