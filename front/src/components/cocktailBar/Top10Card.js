import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import * as Api from "../../api";
import Loader from "./Loader";
import Top10SortButton from "./Top10SortButton";
import Top10Posts from "./Top10Posts";

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
        <Top10Posts top10Cocktails={top10Cocktails} />
        {load && <Loader />}
      </Grid>
    </>
  );
}
