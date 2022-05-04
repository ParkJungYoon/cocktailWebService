import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import * as Api from "../../api";

export default function Test() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await Api.get("userLike").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Grid container sx={{ bgcolor: "rgba(64,64,64,0.5)", p: 10 }}>
      {data.map((v, i) => (
        <Grid item xs={12} key={i} sx={{ color: "white" }}>
          {i + 1}. {v.name}
        </Grid>
      ))}
    </Grid>
  );
}
