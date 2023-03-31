const jwt = require("jsonwebtoken")
const express = require("express");
const { findOne } = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs")

const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send("Hello fom server router js")
});

// router.post("/register", (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).send({ error: "plz fill all details" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).send({ error: "Email exists" });
//             }

//             const user = new User({ name, email, phone, work, password, cpassword })

//             user.save().then(() => {
//                 res.status(201).json("Data stored successfully");
//             }).catch((err) => res.json("failed storing"))
//         }).catch((err) => {
//             res.send("failed checking")
//         })

// })

router.post("/register", async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).send({ error: "plz fill all details" })
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).send({ error: "Email exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword })

            await user.save()

            res.status(201).json("Data stored successfully");
        }

    } catch (err) {
        res.send(err)
    }

});

router.post("/signin", async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Fill all details" })
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Crediential pass" });
            }

            else {
                res.json({ message: "Logged in Successfully" })
            }

        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router