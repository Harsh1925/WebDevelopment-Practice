const express = require("express")
const dotevn = require("dotenv")
const app = express();
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

dotevn.config({ path: "./config.env" });
require("./db/conn")
const PORT = process.env.PORT


const middleware = (req, res, next) => {
    console.log("Hello from middleware");
    next();
}

app.get("/", (req, res) => {
    res.send("This is home page")
})

app.get("/login", (req, res) => {
    res.send("This is Login page")
})

app.get("/profile", middleware, (req, res) => {
    res.send("This is profile page")
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})