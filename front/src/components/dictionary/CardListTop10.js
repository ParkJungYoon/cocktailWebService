import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Card from "./CardItem";

export default function CardListTop10({ top10Cocktails }) {
  const [searchCocktails, setSearchCocktails] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <Grid container spacing={3}>
      {inputValue === ""
        ? top10Cocktails.map((cocktail, i) => {
            return (
              <Grid key={i} item md>
                <Card
                  name={cocktail.name}
                  img={cocktail.imageUrl}
                  ingredient={cocktail.visitors}
                ></Card>
              </Grid>
            );
          })
        : null}
    </Grid>
  );
}
