const btn = document.querySelector('#V2');
const h1 = document.querySelector("h1");

btn.onclick = function () {
    console.log("You clicked me again...");
    console.log("I hope it worked!!")
}

const btn2 = document.querySelector("#V3")

function scream() {
    console.log("AAAAAAA")
    console.log("Don't touch me!!!")
}

btn2.addEventListener("click", function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}


btn.onmouseenter = scream;