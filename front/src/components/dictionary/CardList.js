import Card from "./ItemCard";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import * as Api from "../../api";
import Dictionary from "./Dictionary";

export default function CardList() {
  const [cocktails, setCocktails] = useState([]);

  // 칵테일 데이터 받아오기
  useEffect(() => {
    Api.get("cocktailList").then((res) => setCocktails(res.data));
  }, []);
  console.log(cocktails);

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
