import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
import "../scss/CocktailTest.scss";
import bgImg from "../imgs/bgImg.jpg";

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
            <Grid container mt={25}>
              <Grid item xs={6}>
                <p className="btntitle">
                  10개의 퀴즈로
                  <br /> 알아보는 칵테일 상식
                </p>
              </Grid>
              <Grid item xs={6}>
                <p className="btntitle">
                  MBTI 테스트를 통해
                  <br /> 알아보는 맞춤 칵테일
                </p>
              </Grid>
              <Container
                className="startBtn"
                onClick={() => navigate("/cocktailTest/quiz")}
              >
                QUIZ
              </Container>
              <Container
                className="startBtn"
                onClick={() => navigate("/cocktailTest/mbti")}
              >
                MBTI
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CocktailTest;
