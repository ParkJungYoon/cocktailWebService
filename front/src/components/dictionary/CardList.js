import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Card from "./CardItem";

export default function CardList({ cocktails }) {
  const [searchCocktails, setSearchCocktails] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <Grid container spacing={3}>
      {inputValue === ""
        ? cocktails.map((cocktail, i) => {
            return (
              <Grid key={i} item md>
                <Card
                  name={cocktail.name}
                  img={cocktail.imageUrl}
                  ingredient={cocktail.ingredient}
                ></Card>
              </Grid>
            );
          })
        : null}
    </Grid>
  );
}
