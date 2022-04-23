const fs = require("fs");
const axios = require("axios");
const data = fs.readFileSync("cocktail.json", { encoding: "utf8", flag: "r" });
const cocktail = JSON.parse(data);
const backendPortNumber = "5000";
const serverUrl = "http://localhost:" + backendPortNumber + "/";

for (const [key, value] of Object.entries(cocktail)) {
  axios.post(serverUrl + "addCocktail", {
    name: key,
    ingredient: value["ingredient"],
    imageUrl: value["imageUrl"],
  });
}
