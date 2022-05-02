import React from "react";
import { Grid } from "@mui/material";

import Top10CardItem from "./Top10CardItem";

export default function Top10Posts({ top10Cocktails }) {
  return (
    <>
      {top10Cocktails.map((cocktail, i) => {
        return (
          <Grid key={i} item xs={12} md={6}>
            <Top10CardItem cocktail={cocktail} />
          </Grid>
        );
      })}
    </>
  );
}
