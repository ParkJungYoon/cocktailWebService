/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import {
  Box,
  Grid,
  LinearProgress,
  Button,
  Typography,
  Container,
} from "@mui/material";
import "../../scss/Quiz.scss";

import Question from "./Question";
import QuestionImg from "./QuestionImg";
import Answer from "./Answer";
import Correct from "./Correct";
import OxTable from "./OxTable";
import state from "./QuizData";

import bgImg from "../../imgs/bgImg.jpg";
import quizresult from "../../imgs/quizresult.jpg";

function QuizMain(props) {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [clickedAnswer, setClickedAnswer] = useState(0);
  const [disable, setDisable] = useState(false);
  const [ox, setOx] = useState("");
  // const [marking, setMarking] = useState("");
  const whiteBarStyle = {
    backgroundColor: "white",
    height: "3px",
    borderRadius: "5px",
  };
  const progress = {
    px: "20%",
    mt: 15,
  };
  const result = {
    px: 10,
    // borderRadius: "1rem",
    height: "100vh",
    backgroundImage: `url(${quizresult})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // mt: 3,
  };
  const progressBarAlignCenter = { display: "flex", alignItems: "center" };

  const progressBarStyle = {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
  };
  const percentStyle = {
    color: "white",
    textAlign: "left",
    paddingLeft: "15px",
    fontWeight: "bold",
    fontSize: "20px",
  };

  // the method that checks the correct answer
  const checkAnswer = (answer) => {
    if (answer === state.correctAnswers[step]) {
      setScore(score + 10);
      setClickedAnswer(answer);
      setOx(ox + "O");
    } else {
      setClickedAnswer(answer);
      setOx(ox + "X");
    }
    // setMarking(marking + answer);
    setStep(step + 1);
    setClickedAnswer(0);
  };

  return (
    <>
      {step <= Object.keys(state.questions).length && disable === false ? (
        <Grid container sx={progress}>
          <Question question={state.questions[step]} />
          <Grid container sx={{ mb: 3 }}>
            {/* progress bar */}
            <Grid item xs={11.4} sx={progressBarAlignCenter}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  sx={progressBarStyle}
                  variant="determinate"
                  value={step * 10}
                />
              </Box>
            </Grid>
            <Grid item xs={0.6} sx={percentStyle}>
              {step * 10}%
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {state.imgs[step] && (
              <Grid item xs sx={{ mx: "auto" }}>
                <QuestionImg img={state.imgs[step]} />
              </Grid>
            )}
            <Grid item xs sx={{ ml: 10 }}>
              <Answer
                answer={state.answers[step]}
                step={step}
                checkAnswer={checkAnswer}
                clickedAnswer={clickedAnswer}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        // result part
        <Grid item xs={12} sx={result}>
          <Container
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "100%",
              width: "100%",
            }}
          >
            <Grid container pt={7}>
              <Box
                sx={{
                  border: "3px solid white",
                  pt: 5,
                  pb: 1,
                  px: 5,
                  mx: "auto",
                  width: "50vw",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#ff3897", cursor: "default" },
                  }}
                >
                  SCORE : {score}
                </Typography>
                {/* <p>MARKING : {marking}</p> */}
                {/* O/X table */}
                <OxTable
                  ox={ox}
                  setStep={setStep}
                  setDisable={setDisable}
                ></OxTable>
                <Button
                  sx={{
                    color: "white",
                    mt: 1,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "rgba(128, 128, 128, 0.5)" },
                  }}
                  onClick={() => {
                    location.reload();
                  }}
                >
                  RESTART
                </Button>
              </Box>
            </Grid>

            {disable === true ? (
              // 정답지
              <Box
                sx={{
                  pt: 5,
                  px: 5,
                }}
              >
                <Question question={state.questions[step]} />
                <Grid container sx={{ mb: 3 }}>
                  <Grid
                    item
                    xs={12}
                    //white bar
                    sx={whiteBarStyle}
                  ></Grid>
                </Grid>
                <Grid container spacing={3}>
                  {state.imgs[step] && (
                    <Grid item xs sx={{ mx: "auto" }}>
                      <QuestionImg img={state.imgs[step]} />
                    </Grid>
                  )}
                  <Grid item xs sx={{ ml: 10 }}>
                    <Correct
                      answer={state.answers[step]}
                      step={step}
                      correctAnswer={state.correctAnswers[step]}
                    />
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box sx={{ mt: 3 }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                  문제 번호를 눌러 정답을 확인해보세요.
                </Typography>
              </Box>
            )}
          </Container>
        </Grid>
      )}
    </>
  );
}
export default QuizMain;
