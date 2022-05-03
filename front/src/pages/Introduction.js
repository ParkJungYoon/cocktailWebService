import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../scss/Introduction.scss";
import IntroductionMenu from "../components/introduction/IntroductionMenu";

function Introduction() {
  return (
    <div className="Introduction">
      <Grid container sx={{ mt: 25 }}>
        <Grid item xs={12}>
          <IntroductionMenu />
        </Grid>
      </Grid>
    </div>
  );
}

export default Introduction;
