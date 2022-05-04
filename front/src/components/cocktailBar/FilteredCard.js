import { memo, useRef, useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";

import AllCardItem from "./AllCardItem";

function FilteredCard({ filteredCocktails }) {
  // state

  return (
    <>
      <Grid container spacing={3} sx={{ px: 15 }}>
        {filteredCocktails.map((cocktail, i) => {
          return (
            <Grid key={i} item xs>
              <AllCardItem cocktail={cocktail} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default memo(FilteredCard);
