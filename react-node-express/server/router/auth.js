const express = require("express");
const { findOne } = require("../model/userSchema");
const router = express.Router();

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
        }

        const user = new User({ name, email, phone, work, password, cpassword })

        await user.save()

        res.status(201).json("Data stored successfully");

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

        console.log(userLogin);

        if (!userLogin) {
            res.status(400).json({ error: "User not found" });
        } else {
            res.json({ message: "Logged in Successfully" })
        }
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router