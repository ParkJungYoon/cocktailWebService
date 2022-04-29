import React from "react";
import { Grid, Typography } from "@mui/material";

import "../scss/Dictionary.scss";
import CardMenu from "../components/dictionary/CardMenu";

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
