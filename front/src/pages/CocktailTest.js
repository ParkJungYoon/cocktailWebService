import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
// import QuizMain from "../components/quiz/QuizMain";
import bgImg from "../imgs/bgImg.jpg";
import "../scss/QuizMain.scss";

function CocktailTest() {
  const navigate = useNavigate();
  const topBlank = {
    marginTop: "1.5rem",
    marginLeft: "5%",
    marginRight: "5%",
  };
  const quizGridStyle = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImg})`,
    backgroundSize: "cover",
  };
  const quizStartBtn = {
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
  const mbtiStartBtn = {
    marginTop: "5rem",
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
          <Grid item xs={12} md={12} mt={22}></Grid>
          <Grid item xs={12} md={12} height="720px" sx={quizGridStyle}>
            <Container
              className="startBtn"
              sx={quizStartBtn}
              onClick={() => navigate("/cocktailTest/quiz")}
            >
              QUIZ START
            </Container>
            <Container
              className="startBtn"
              sx={mbtiStartBtn}
              onClick={() => navigate("/cocktailTest/mbti")}
            >
              MBTI START
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CocktailTest;
