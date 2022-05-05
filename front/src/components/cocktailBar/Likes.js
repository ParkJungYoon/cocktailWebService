import { memo, useRef, useEffect, useState, useCallback } from "react";
import { Grid, Box } from "@mui/material";

import * as Api from "../../api";
import AllCardItem from "./AllCardItem";
import Loader from "./Loader";
import LikeSortButton from "./LikeSortButton";
function Likes() {
  // state
  const [cocktails, setCocktails] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    setLoad(true);
    await Api.get("cocktails/likeList").then((res) => {
      setCocktails(res.data);
    });
    setLoad(false);
  }, []);

  return (
    <>
      <Box sx={{ px: 15, pb: 3 }}>
        <LikeSortButton cocktails={cocktails} setCocktails={setCocktails} />
      </Box>
      <Grid container spacing={1} sx={{ px: 15, mx: "auto" }}>
        {cocktails.map((cocktail, i) => {
          return (
            cocktail.isLiked && (
              <Grid key={i} item xs>
                <AllCardItem cocktail={cocktail} />
              </Grid>
            )
          );
        })}
        {load && <Loader />}
      </Grid>
    </>
  );
}

export default memo(Likes);
