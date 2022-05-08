import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import * as Api from "../../api";
import Loader from "./Loader";
import Top10SortButton from "./Top10SortButton";
import Top10CardItem from "./Top10CardItem";

export default function Top10Card() {
  // state
  const [top10Cocktails, setTop10Cocktails] = useState([]);
  const [load, setLoad] = useState(false);

  // top10 cocktail 불러오기
  useEffect(async () => {
    setLoad(true);
    await Api.get("cocktails/rank").then((res) => {
      setTop10Cocktails(res.data);
      setLoad(false);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Grid container sx={{ px: 20, mx: "auto" }}>
        <Grid item xs>
          <Top10SortButton
            top10Cocktails={top10Cocktails}
            setTop10Cocktails={setTop10Cocktails}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ pt: 3, px: 20, mx: "auto" }}>
        {top10Cocktails.map((cocktail, i) => {
          return (
            <Grid key={i} item xs={12} md={6}>
              <Top10CardItem cocktail={cocktail} />
            </Grid>
          );
        })}
        {load && <Loader />}
      </Grid>
    </>
  );
}
