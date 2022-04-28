import React from "react";
import { Grid } from "@mui/material";

import CardItem from "./CardItem";

export default function top10CardList({
  cocktails,
  searchCocktails,
  setIsDetailOpen,
}) {
  return (
    <>
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
                <CardItem
                  cocktail={cocktail}
                  setIsDetailOpen={setIsDetailOpen}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
