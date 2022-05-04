import React from "react";
import { Grid } from "@mui/material";

import "../scss/CocktailBar.scss";
import CardMenu from "../components/cocktailBar/CardMenu";

export default function Dictionary() {
  return (
    <div className="dictionary">
      <Grid container sx={{ mt: 25 }}>
        <Grid item xs={12}>
          <CardMenu />
        </Grid>
      </Grid>
    </div>
  );
}
