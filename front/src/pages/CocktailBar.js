import React from "react";
import { Grid } from "@mui/material";

import "../scss/CocktailBar.scss";
import MenuBar from "../components/cocktailBar/MenuBar";

export default function Dictionary() {
  return (
    <div className="dictionary">
      <Grid container sx={{ mt: 17 }}>
        <Grid item xs={12}>
          <MenuBar />
        </Grid>
      </Grid>
    </div>
  );
}
