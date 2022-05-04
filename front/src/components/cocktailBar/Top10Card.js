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
    });
  }, []);

  return (
    <>
      <Grid container color="white">
        <Box
          sx={{
            ml: "auto",
            px: 15,
            mb: 4,
          }}
        >
          <Top10SortButton
            top10Cocktails={top10Cocktails}
            setTop10Cocktails={setTop10Cocktails}
          />
        </Box>
      </Grid>
      <Grid container spacing={3} sx={{ px: 10 }}>
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
