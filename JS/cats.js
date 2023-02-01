const list = document.querySelector("#cats")
const input = document.querySelector("#catName")
const form = document.querySelector("#shelter")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLI = document.createElement("LI")
    catName = input.value;
    newLI.innerText = catName;
    list.append(newLI)
    input.value = "";
})
