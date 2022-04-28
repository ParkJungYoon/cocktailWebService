import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import QuizMain from "../components/quiz/QuizMain";
<<<<<<< HEAD
import bgImg from "../components/quiz/img/bgImg.jpg";
=======
import bgImg from "../imgs/bgImg.jpg";
>>>>>>> 6d6d25d949215e5786fbe7b9dc4255de21d3e72b

function Quiz() {
  const [start, setStart] = useState(0);
  const quizGridStyle = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImg})`,
    backgroundSize: "cover",
  };

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <CardContent>
        <Grid
          container
          justifyContent="center"
          sx={{
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={12} mt={13} height="720px" sx={quizGridStyle}>
            {start === 1 ? (
              <QuizMain></QuizMain>
            ) : (
              <button
                onClick={() => {
                  setStart(1);
                }}
              >
                테스트 시작하기
              </button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}

export default Quiz;
