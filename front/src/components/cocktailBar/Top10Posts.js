import React from "react";
import { Grid } from "@mui/material";

import Top10CardItem from "./Top10CardItem";

export default function Top10Posts({ top10Cocktails }) {
  return (
    <>
      {top10Cocktails
        .sort((A, B) => {
          return A.rank.rank < B.rank.rank
            ? -1
            : A.rank.rank > B.rank.rank
            ? 1
            : 0;
        })
        .map((cocktail, i) => {
          return (
            <Grid key={i} item xs={6}>
              <Top10CardItem cocktail={cocktail} />
            </Grid>
          );
        })}
    </>
  );
}
