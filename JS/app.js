// let day = prompt("Enter a Day").toLowerCase()

// if (day == "monday") {
//     console.log("You chose a bad day")
// }
// else if (day == "tuesday") {
//     console.log("You chose a bad day")
// }

// else {
//     console.log("You are close to weekends")
// }

// let password = prompt("Enter a valid password")

// if (password.length >= 6 && password.indexOf(" ") == -1) {
//     console.log("You entered good and valid password")
// }

// else {
//     console.log("Not a valid password!!!!!")
// }


// let color = ["rad", "green", "blue"]

// console.log(color)

// console.log(color.push("Yellow"))

// console.log(color)

// console.log(color.push("wow", "pitch"))

// color[0] = "red"

// console.log(color)

// console.log(color.pop())

// console.log(color)

// console.log(color.shift())

// console.log(color)

// console.log(color.unshift("VIP"))

// console.log(color)

// console.log(color.includes("wow"))

// console.log(color.includes("yellow"))

// console.log("Index of blue  " + color.indexOf("blue"))

// console.log(color.slice(1, 3))

// console.log(color.splice(2, 1))

// console.log(color)

// console.log(color.splice(1, 0, "blue"))

// console.log(color)

// let num = [1, 2, 3, 4]

// console.log(num == [1, 2, 3, 4])

// console.log([1, 2] == [1, 2])

// let numcopy = num

// console.log(num)

// console.log(numcopy)

// num.pop()

// console.log(num)

// console.log(numcopy)

// numcopy.push(5)

// console.log(num)

// console.log(numcopy)

// console.log(num == numcopy)

//--------------------------OBJECTS---------------------------------//


// let person = { firstName: "Ramesh", lastName: "Patel", favNum: 20, favcolor: ['red', 'green'] }

// console.log(person)

// console.log(person["lastName"])

// console.log(person["favcolor"])

// console.log(person.favNum)

// person.favcolor[1] = "blue"

// console.log(person)

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

// let animals = ["dog", "cat", "birds"]

// console.log(animals.length)

// for (i = 0; i < animals.length; i++) {
//     console.log(i + " " + animals[i])
// }

// for (let names of animals) {
//     console.log(names)
// }


// for (i = 0; i < 4; i++) {
//     console.log(`i is ${i}`)

//     for (let j = 0; j < 4; j++) {
//         console.log(`       j is ${j}`)
//     }
// }

//-------------------------Function--------------------

// function diceRoll(num) {
//     let number = Math.floor(Math.random() * num) + 1
//     console.log(number)
// }

// diceRoll(prompt("Enter a number"))
// diceRoll(10)
// diceRoll(6)



//--------Difference between VAR and LET in JS---------------


// for (let i = 0; i < 5; i++) {
//     var msg = " YElllo "
//     console.log(msg)
// }

// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg2 = " OKKKK "
//     console.log(msg2)
// }

// console.log(msg2)

// let i = 1

// if (i < 2) {
//     let msg = "fjdskfj"
//     console.log(msg)
// }


//----------------------------------------------------------------

// console.log(msg)

// const add = function (x, y) {
//     return x + y;
// }

// console.log(add(2, 5))

// const add = (x, y) => {
//     return x + y;
// }

// console.log(add(2, 5))

// const add = (a, b) => a + b

// console.log(add(2, 5))

//-------------------------------------------------------------------

// function isBetween(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// let isJunior = isBetween(1, 15)
// console.log(isJunior(12))
// console.log(isJunior(34))

// let isSenior = isBetween(15, 35)
// console.log(isSenior(12))
// console.log(isSenior(20))

// let isOld = isBetween(35, 50)
// console.log(isOld(49))

// const myMath = {
//     PI: 3.1427,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// console.log(myMath.PI)
// console.log(myMath.square(2))
// console.log(myMath.cube(3))


// const myMath = {
//     PI: 3.1427,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// console.log(myMath.PI)
// console.log(myMath.square(2))
// console.log(myMath.cube(3))


//-----------------------------------------------------
//-----------------------------------------------------

// const cat = {
//     name: "Walla",
//     pet: "Street",
//     meow() {
//         console.log(`${this.name} says meow`)
//     }
// }

// const meow2 = cat.meow

// cat.meow()
// meow2()


//----------------------------------try/catch-----------------------

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3))
//     }
//     catch (e) {
//         console.log(e);
//         console.log("Please enter peppega jammer songs")
//     }
// }

// console.log(yell("Hello"))

// console.log(yell(1231231))

//----------------------------------forEach-----------------------------


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// function print(element) {
//     console.log(element)
// }

// numbers.forEach(print)

// numbers.forEach(function (element) {
//     console.log(element)
// })

//------------------------------------MAP------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const dubled = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(dubled)

//-------------------------------Filter--------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const even = numbers.filter(n => {
//     return n % 2 == 0;
// })

// console.log(even)

//-------------------------Every and Some-------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(numbers.every(score => score < 10))
// console.log(numbers.every(score => score > 5))
// console.log(numbers.some(score => score > 5))


//---------------------------REDUCE-------------------------------

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0;
// for (let price of prices) {
//     total += price
// }

// console.log(total)



// const other_total = prices.reduce((total2, price) => total2 + price)

// console.log(other_total)


// const minPrice = prices.reduce((min, price) => {
//     if (min > price) {
//         return price;  //if jo price ni value min karta vadhare to min ni value price ni value jode replce thase
//     }
//     return min; // else min ni value same j rehse

// })

// console.log(minPrice)

//-------------------------------------------spread---------------------

// const nums = [1, 23, 536, 14, 35, 56, 67]

// console.log(...nums)

// console.log(nums)

// console.log(..."hello")

// console.log(Math.max(nums))
// console.log(Math.max(...nums))

// const cats = ["meowsky, blowsky, socko"]

// const dogs = ["ruby", "moti", "tommy"]

// const allPets = [...cats, ...dogs, "pandu"]

// console.log(allPets)
// console.log(cats)

// const new_cats = cats

// new_cats.push("mushroom")
// console.log(cats)
// console.log(new_cats)
// console.log(allPets)

//-----------------------ARGUMENTS----------------------

// function sum() {
//     console.log(arguments)
// }

// function totally(nomber) {
//     console.log(nomber)
// }

// totally(434, 23, 534, 23)

// function total(...nums) {           //REST parameter
//     console.log(nums)
// }

// function summation(...number) {
//     return number.reduce((total2, prices) => total2 + prices)
// }

// total(2, 53, 234, 53)

// console.log(summation(2, 4, 1))

// function race(gold, silver, ...everyoneElse) {
//     console.log(`Gold Medal goes to: ${gold}`)
//     console.log(`Silver Medal goes to: ${silver}`)
//     console.log(`And thanks goes to Everyone Else: ${everyoneElse}`)
// }

// race("Jammy", "Tom", "Jerry", "Tina", "Cat")

// const scores = [23, 322, 234, 22, 54, 8]

// //const highscore or gold1 = socres[0]
// //const secondscore or silver2 = scores[1]
// const [gold1, silver2, ...everyElse] = scores

// console.log(gold1)
// console.log(silver2)  ////////--------Destructuring parameters----///////////////////
// console.log(everyElse)

