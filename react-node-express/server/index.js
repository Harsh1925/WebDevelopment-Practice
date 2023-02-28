const express = require("express")
const dotevn = require("dotenv")
const app = express();
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

dotevn.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"))

const User = require("./model/userSchema");
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