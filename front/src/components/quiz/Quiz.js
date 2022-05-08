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
        mt={18}
        sx={{
          textAlign: "center",
        }}
      >
        <QuizMain></QuizMain>
      </Grid>
    </div>
  );
}

export default Quiz;
