import React, { useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import QuizMain from "../components/quiz/QuizMain";
import bgImg from "../imgs/bgImg.jpg";
import "../scss/QuizMain.scss";

function Quiz() {
  const [start, setStart] = useState(0);
  const quizGridStyle = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImg})`,
    backgroundSize: "cover",
  };
  const startBtn = {
    width: "200px",
    height: "100px",
    color: "white",
    fontSize: "30px",
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    borderRadius: "1rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        sx={{
          fontSize: "15px",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} md={12} mt={22}></Grid>
        {start === 1 ? (
          <QuizMain></QuizMain>
        ) : (
          <Grid item xs={12} md={12} height="720px" sx={quizGridStyle}>
            <Container
              className="startBtn"
              sx={startBtn}
              onClick={() => {
                setStart(1);
              }}
            >
              START
            </Container>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Quiz;
