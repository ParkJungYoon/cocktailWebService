const fs = require("fs");
const axios = require("axios");

const cocktail = fs.readFileSync("cocktail_rank.json", {
  encoding: "utf8",
  flag: "r",
});

const cocktail_rank = JSON.parse(cocktail);


const backendPortNumber = "5000";
const serverUrl = "http://localhost:" + backendPortNumber + "/";

for (const [key, value] of Object.entries(cocktail_rank)) {
  axios.post(serverUrl + "addRank", {
    name: key,
    years: value["years"],
    visitors: value["visitors"],
    rank: value["rank"],
  });
}
