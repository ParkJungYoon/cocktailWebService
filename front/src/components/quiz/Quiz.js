import React from "react";
import { Grid, Box } from "@mui/material";
import QuizMain from "./QuizMain";
import "../../scss/Quiz.scss";

function Quiz() {
  const topBlank = {
    marginTop: "1.5rem",
    marginLeft: "5%",
    marginRight: "5%",
  };

  return (
    <div className="quiz">
      <Box sx={topBlank}>
        <Grid
          container
          justifyContent="center"
          sx={{
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} mt={22}></Grid>
          <QuizMain></QuizMain>
        </Grid>
      </Box>
    </div>
  );
}

export default Quiz;
