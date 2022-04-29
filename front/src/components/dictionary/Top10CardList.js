import React from "react";
import { Grid } from "@mui/material";

import Top10CardItem from "./Top10CardItem";

export default function Top10CardList({ cocktails }) {
  return (
    <>
      <Grid container spacing={3} sx={{ px: 10 }}>
        {cocktails.map((cocktail, i) => {
          return (
            <>
              {cocktail.rank != undefined && cocktail.rank.rank <= 10 && (
                <Grid key={i} item xs={6}>
                  <Top10CardItem cocktail={cocktail} />
                </Grid>
              )}
            </>
          );
        })}
      </Grid>
    </>
  );
}
