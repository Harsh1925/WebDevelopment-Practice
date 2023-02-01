import franc from "franc";
const langs = require("langs")

const langCode = franc("Alle menslike wesens word vry")

const lang = langs.where("3", langCode);

console.log(lang);