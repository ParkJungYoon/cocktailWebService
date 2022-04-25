import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../../scss/Cocktails.scss";
import Card from "./ItemCard";
import * as Api from "../../api";

export default function Cocktails() {
  const navigate = useNavigate();
  const [cocktails, setCocktails] = useState([]);

  // 칵테일 데이터 받아오기
  useEffect(() => {
    Api.get("cocktailList").then((res) => setCocktails(res.data));
  }, []);

  return (
    <div className="cocktails">
      <Typography variant="h4" align="center" sx={{ pt: 5, mb: 10 }}>
        칵테일 백과사전
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 3 }}
        columnSpacing={{ xs: 5 }}
        sx={{ px: 10 }}
      >
        {cocktails.map((cocktail, i) => {
          return (
            <Grid key={i} item xs>
              <Card
                name={cocktail.name}
                img={cocktail.imageUrl}
                ingredient={cocktail.ingredient}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
