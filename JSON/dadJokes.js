const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")


const getDadJokes = async () => {
    const config = { headers: { Accept: "application/json" } }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    return res.data.joke;
}

const addNewJokes = async () => {
    const jokeText = await getDadJokes();
    const newLI = document.createElement("LI")
    newLI.append(jokeText);
    jokes.append(newLI)

}


button.addEventListener("click", addNewJokes)