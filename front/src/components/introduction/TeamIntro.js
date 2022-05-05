import React from "react";
import { Grid } from "@mui/material";
import TeamIntroContents from "./TeamIntroContents";

function TeamIntroPart() {
  return (
    <>
      <Grid container sx={{ width: "70vw", mx: "auto" }}>
        <Grid
          item
          xs
          sx={{
            backgroundColor: "rgba(128, 128, 128, 0.2)",
            padding: "2rem",
            borderRadius: "1.5rem",
          }}
        >
          <TeamIntroContents></TeamIntroContents>
        </Grid>
      </Grid>
    </>
  );
}

export default TeamIntroPart;
