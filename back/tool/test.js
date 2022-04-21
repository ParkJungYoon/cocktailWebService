const fs = require("fs");
const axios = require("axios");
const data = fs.readFileSync("cocktail.json", { encoding: "utf8", flag: "r" });

const cocktail = JSON.parse(data);

async function post(data) {
  const cocktail = JSON.parse(data);
  const backendPortNumber = "5000";
  const serverUrl = "http://localhost:" + backendPortNumber + "/";

  return axios.post(serverUrl + "addCocktail", data);
}

Object.keys(cocktail).forEach(function (v) {
  post(v);
});
