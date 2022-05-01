import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import MbtiMain from "../components/mbti/MbtiMain";

function Mbti() {
  return (
    <div className="mbti">
      <Grid container>
        <Grid item xs={12} sx={{ marginTop: "11rem" }}>
          <MbtiMain></MbtiMain>
        </Grid>
      </Grid>
    </div>
  );
}

export default Mbti;
