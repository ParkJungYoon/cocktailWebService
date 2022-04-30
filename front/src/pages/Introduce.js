import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../scss/Introduce.scss";
import IntroduceMenu from "../components/introduce/IntroduceMenu";

function IntroducePage() {
  return (
    <div className="dictionary">
      <Grid container sx={{ mt: 25 }}>
        <Grid item xs={12}>
          <IntroduceMenu />
        </Grid>
      </Grid>
    </div>
  );
}

export default IntroducePage;
