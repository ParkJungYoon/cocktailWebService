import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import AllCardItem from "./AllCardItem";
import * as Api from "../../api";

export default function AllPosts({ cocktails }) {
  const [like, setLike] = useState([]);
  const liked = {};
  useEffect(async () => {
    await Api.get("userLike").then((res) => {
      setLike(res.data);
    });
  }, []);

  like.map((v) => (liked[v.name] = true));

  return (
    <>
      {cocktails.map((cocktail, i) => {
        return (
          <Grid key={i} item sm>
            <AllCardItem liked={liked} cocktail={cocktail} />
          </Grid>
        );
      })}
    </>
  );
}
