const container = document.querySelector("#container");


for (let i = 1; i < 101; i++) {

    let newImg = document.createElement("img");

    let link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    container.appendChild(newImg)

}