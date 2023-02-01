const form = document.querySelector("#shows");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const input = form.elements.query.value;
    const config = { params: { q: input } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    searchImg(res.data)
})

const searchImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}