import React from "react";
import { Grid, Box } from "@mui/material";

import CardItem from "./CardItem";

export default function top10CardList({ cocktails, searchCocktails }) {
  return (
    <>
      <Grid container rowSpacing={3} columnSpacing={1} sx={{ px: 15 }}>
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
              <Grid key={i} item xs>
                <CardItem cocktail={cocktail} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
