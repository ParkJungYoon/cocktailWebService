import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Card from "./ItemCard";
import * as Api from "../../api";

export default function CardList() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    Api.get("cocktails").then((res) => setCocktails(res.data));
  }, []);

  return (
    <Grid container spacing={3}>
      {cocktails.map((cocktail, i) => {
        return (
          <Grid key={i} item md>
            <Card
              name={cocktail.name}
              img={cocktail.imageUrl}
              ingredient={cocktail.ingredient}
            ></Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
