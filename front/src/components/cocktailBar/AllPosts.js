import React from "react";
import { Grid } from "@mui/material";

import AllCardItem from "./AllCardItem";

export default function AllPosts({ cocktails }) {
  return (
    <>
      {cocktails.map((cocktail, i) => {
        return (
          <Grid key={i} item sm>
            <AllCardItem cocktail={cocktail} />
          </Grid>
        );
      })}
    </>
  );
}
