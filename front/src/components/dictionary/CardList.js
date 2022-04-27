import React, { useEffect, useState } from "react";
import { Grid, InputBase } from "@mui/material";

import Card from "./CardItem";

export default function CardList({
  cocktails,
  searchCocktails,
  setOpenedCocktail,
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
                <Card
                  name={cocktail.name}
                  img={cocktail.imageUrl}
                  ingredient={cocktail.ingredient}
                  setOpenedCocktail={setOpenedCocktail}
                  setIsDetailOpen={setIsDetailOpen}
                ></Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
