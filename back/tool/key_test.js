const fs = require("fs");
const axios = require("axios");

const backendPortNumber = "5000";
const serverUrl = "http://localhost:" + backendPortNumber + "/";

const data = fs.readFileSync("cocktail_total.json", { encoding: "utf8", flag: "r" });
const cocktail = JSON.parse(data);

for (const [key, value] of Object.entries(cocktail)) {
  axios.post(serverUrl + "addCocktail", {
    name: key,
    ingredient: value["ingredient"],
    imageUrl: value["image"],
    taste : value["taste"],
    description : value["description"]
  }).then(result => {
    console.log(result);
  });
}
