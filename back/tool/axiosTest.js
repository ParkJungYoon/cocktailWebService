const fs = require("fs");
const axios = require("axios");
const data = fs.readFileSync("cocktail.json", { encoding: "utf8", flag: "r" });
//console.log(data);
const cocktail = JSON.parse(data);
const backendPortNumber = "5000";
const serverUrl = "http://localhost:" + backendPortNumber + "/";

axios.post(serverUrl + "addCocktail", {
  name: "Flor de Amaras",
  ingredient: cocktail["Flor de Amaras"],
});
