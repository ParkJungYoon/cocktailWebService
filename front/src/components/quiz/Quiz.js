import React from "react";
import { Grid, Box } from "@mui/material";
import QuizMain from "./QuizMain";
import "../../scss/Quiz.scss";

function Quiz() {
  return (
    <div className="quiz">
      <Grid
        container
        justifyContent="center"
        pt={18}
        sx={{
          fontSize: "15px",
          textAlign: "center",
        }}
      >
        <QuizMain></QuizMain>
      </Grid>
    </div>
  );
}

export default Quiz;
