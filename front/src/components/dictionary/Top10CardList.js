import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

import Top10CardItem from "./Top10CardItem";
import Top10SortButton from "./Top10SortButton";

export default function Top10CardList({ top10Cocktails, setTop10Cocktails }) {
  return (
    <>
      <Grid container xs={12} color="white">
        <Box
          sx={{
            ml: "80%",
            mb: 3,
          }}
        >
          <Top10SortButton
            top10Cocktails={top10Cocktails}
            setTop10Cocktails={setTop10Cocktails}
          />
        </Box>
      </Grid>
      <Grid container spacing={3} sx={{ px: 10 }}>
        {top10Cocktails
          // .sort((A, B) => {
          //   return A.rank.rank < B.rank.rank
          //     ? -1
          //     : A.rank.rank > B.rank.rank
          //     ? 1
          //     : 0;
          // })
          .map((cocktail, i) => {
            return (
              <Grid key={i} item xs={6}>
                <Top10CardItem cocktail={cocktail} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
