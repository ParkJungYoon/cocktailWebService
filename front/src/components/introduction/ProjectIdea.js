import React from "react";
import { Grid } from "@mui/material";
import PrologueContents from "./ProjectIdeaContents";

function ProjectIdea() {
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
          <PrologueContents></PrologueContents>
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectIdea;
