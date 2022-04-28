import React from "react";
import { Grid, Box } from "@mui/material";

import CardItem from "./CardItem";
import CardSearch from "./CardSearch";
export default function top10CardList({
  cocktails,
  searchCocktails,
  setSearchCocktails,
}) {
  const searchBoxStyle = {
    bgcolor: "rgba(64, 64, 64, 0.9);",
    width: "200px",
    mb: 5,
  };
  return (
    <>
      <Box sx={searchBoxStyle}>
        <CardSearch setSearchCocktails={setSearchCocktails} />
      </Box>
      <Grid container spacing={3}>
        {cocktails
          .filter((val) => {
            if (searchCocktails == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchCocktails.toLowerCase())
            ) {
              return val;
            }
          })
          .map((cocktail, i) => {
            return (
              <Grid key={i} item md>
                <CardItem cocktail={cocktail} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
