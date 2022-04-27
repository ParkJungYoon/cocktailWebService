import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import "../../scss/Dictionary.scss";
import CardList from "../dictionary/CardList";
import CardMenu from "../dictionary/CardMenu";
import TestDetailCocktail from "./TestDetailCocktail";
export default function Dictionary() {
  return (
    <>
      <div className="dictionary">
        <Grid container>
          <Grid item xs={12}>
            <p className="dictionaryTitle">Dictionary</p>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} color="white">
            <CardMenu></CardMenu>
          </Grid>
          <Grid item xs={8} color="white">
            <TestDetailCocktail />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
}
