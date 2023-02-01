const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                resolve("Successed!!!")
            }
            reject("Request Error!!")
        }, 1000)
    })
}

fakeRequest("/dogs/1")
    .then((data) => {
        console.log("Done with the Request!")
        console.log("data is:", data)
    })
    .catch((err) => {
        console.log("Oh NO!!", err)
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

// delayedColorChange("green", 1000)
//     .then(() => {
//         return delayedColorChange("blue", 1000)
//     })
//     .then(() => {
//         return delayedColorChange("red", 1000)
//     })
//     .then(() => {
//         return delayedColorChange("yellow", 1000)
//     })



// delayedColorChange("green", 1000)
//     .then(() => delayedColorChange("blue", 1000))
//     .then(() => delayedColorChange("yellow", 1000))
//     .then(() => delayedColorChange("green", 1000))
//     .then(() => delayedColorChange("orange", 1000))
//     .then(() => delayedColorChange("indigo", 1000))
//     .then(() => delayedColorChange("violet", 1000))

//------------AWAit----------------------------

async function rainbow() {
    await delayedColorChange("blue", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("indigo", 1000)
    await delayedColorChange("violet", 1000)
    return "ALL DONE!"
}

rainbow().then((data) => console.log("Rainbow Done!", data))