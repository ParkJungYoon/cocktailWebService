import React from "react";
import { Grid, Typography } from "@mui/material";

import "../scss/Dictionary.scss";
import CardMenu from "../components/dictionary/CardMenu";

export default function Dictionary() {
  return (
    <Grid container className="dictionary">
      <Grid item xs={12}>
        <Typography className="dictionaryTitle">Dictionary</Typography>
      </Grid>
      <Grid item xs>
        <CardMenu />
      </Grid>
    </Grid>
  );
}
