// async function hello() {

// }

// console.log(hello())

// const sing = async () => {
//     //throw "OH NO, problems!"
//     return "Suceeseddddd!"
// }

// sing()
//     .then(data => {
//         console.log("Promise Resolved", data)
//     })
//     .catch(err => {
//         console.log("Wow", err)
//     })

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password == "admin") return "Welcome!!"
    throw "Invalid Password"
}

login("okok")
    .then(msg => {
        console.log("Logged IN")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })

login("okok", "new")
    .then(msg => {
        console.log("Logged IN")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })

login("okok", "admin")
    .then(msg => {
        console.log("Logged IN")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })