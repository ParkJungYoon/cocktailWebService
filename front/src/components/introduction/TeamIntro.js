import React from "react";
import { Grid } from "@mui/material";
import TeamIntroContents from "./TeamIntroContents";

function TeamIntroPart() {
  return (
    <>
      <Grid container>
        <Grid item xs={2} md={2}></Grid>
        <Grid
          item
          xs={8}
          md={8}
          sx={{
            backgroundColor: "rgba(128, 128, 128, 0.2)",
            padding: "2rem",
            borderRadius: "1.5rem",
          }}
        >
          <TeamIntroContents></TeamIntroContents>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
    </>
  );
}

export default TeamIntroPart;
