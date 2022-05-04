import { memo, useRef, useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";

import * as Api from "../../api";
import CardSearch from "./CardSearch";
import AllPosts from "./AllPosts";
import AllSortButton from "./AllSortButton";
import Loader from "./Loader";

function FilteredCard({ filteredCocktails }) {
  // state

  return (
    <>
      <Grid container spacing={1} sx={{ px: 15 }}>
        <AllPosts cocktails={filteredCocktails}></AllPosts>
        {/* {cocktails && <AllPosts cocktails={cocktails} />}
        {load && <Loader />}
        <div ref={obsRef}></div> */}
      </Grid>
    </>
  );
}

export default memo(FilteredCard);
