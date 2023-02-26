const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connection Successful")
    })
    .catch((e) => console.log(`No Connection ${e}`))
