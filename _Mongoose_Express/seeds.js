const mongoose = require("mongoose");
const Product = require("./models/product")

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Mongo Connection Open!!")
    })
    .catch(err => {
        console.log("Oh NO eRRR!!")
        console.log(err)
    })

// const p = new Product({
//     name: "Cherry",
//     price: 1.99,
//     category: "fruit"
// })

// p.save()
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const seedProducts = [
    {
        name: "Eggplant",
        price: 1.00,
        category: "vegetable"
    },
    {
        name: "Melon",
        price: 4.99,
        category: "fruit"
    },
    {
        name: "Watermelon",
        price: 3.99,
        category: "fruit"
    },
    {
        name: "Celery",
        price: 1.50,
        category: "vegetable"
    },
    {
        name: "Chocolate",
        price: 2.69,
        category: "dairy"
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

