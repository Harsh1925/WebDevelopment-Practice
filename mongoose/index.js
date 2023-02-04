const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/productApp')
    .then(() => {
        console.log("Connection Open!!")
    })
    .catch(err => {
        console.log("Oh NO eRRR!!")
        console.log(err)
    })

// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     score: Number,
//     rating: String,
// })

// const Movie = mongoose.model("Movie", movieSchema);

// const avengers = new Movie({ title: "Avengers", year: 1986, score: 9.9, rating: "PG" })
// avengers.save()

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("It Worked!!");
//         console.log(data)
//     })

// const productSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         require: true,
//         maxlength: 20
//     },

//     price: {
//         type: Number,
//         require: true,
//         min: [0, "price must be postive you bucko!!"]
//     },

//     onSale: {
//         type: Boolean,
//         default: false
//     },

//     categories: [String],
//     qty: {
//         online: {
//             type: Number,
//             default: 0
//         },
//         inStore: {
//             type: Number,
//             default: 0
//         }
//     },

//     size: {
//         type: String,
//         enum: ["S", "M", "L"]
//     }
// })

// productSchema.methods.greet = function () {
//     console.log("ok now")
//     console.log(`This is from ${this.name}`)
// }

// productSchema.methods.toggleOnSale = function () {
//     this.onSale = !this.onSale;  // true hoy to false kari dese or vice versa
//     return this.save();   //this takes time that why we will use await fun
// }

// productSchema.statics.fireSale = function () {
//     return this.updateMany({ name: ["Bike bag", "Bike Helmet"] }, { onSale: true, price: 0 })
// }

// const Product = mongoose.model("Product", productSchema);



// const bike = new Product({ name: "Moutain Bike", price: 599 });
// const helmet = new Product({ name: "Bike Helmet", price: "9.99", catagories: ["Cycling", " Safety"] })

// bike.save()
//     .then(data => {
//         console.log("It Worked! For first")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(" Oh Narhhhh")
//         console.log(err)
//     })

// helmet.save()
//     .then(data => {
//         console.log("It Worked! for Second")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(" Oh Narhhhh")
//         console.log(err)
//     })


// const bag = new Product({ name: "Bike bag", price: "1.25", catagories: ["Travelling"] })

// bag.save()
//     .then(data => {
//         console.log("It Worked! for Second")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(" Oh Narhhhh")
//         console.log(err)
//     })


// const fndProduct = async () => {
//     const gotProduct = await Product.findOne({ name: "Bike Helmet" });
//     gotProduct.greet();
// }

// fndProduct();


// Product.findOneAndUpdate({ name: "Bike Helmet" }, { price: 1.09 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("It Worked! for third I think")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(" Oh Narhhhh")
//         console.log(err)
//     })

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: "Moutain Bike" });
//     console.log(foundProduct)
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct)
// }

// findProduct();

//Product.fireSale().then(res => console.log(res))

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual("fullName").get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model("Person", personSchema)

const p = new Person({ first: "pandu", last: "modi" })

// async function init() {
//     console.log(1);
//     await sleep(10000);
console.log(p.fullName)
//     console.log(2);
// }
// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// init()



