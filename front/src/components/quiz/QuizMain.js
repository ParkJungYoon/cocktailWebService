/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { Box, Grid, LinearProgress } from "@mui/material";
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
  const QuestionImgStyle = {
    display: "flex",
    justifyContent: "left",
  };
  const progress = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImg})`,
    backgroundSize: "cover",
  };
  const result = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ), url(${quizresult})`,
    backgroundSize: "cover",
  };
  const progressBarAlignCenter = { display: "flex", alignItems: "center" };
  const progressBarStyle = {
    height: "3.5px",
    color: "brown",
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
        <>
          <Grid className="quizMain" item xs={12} height="720px" sx={progress}>
            <div className="question">
              <Question question={state.questions[step]} />
            </div>
            <Grid container mb="3%">
              {/* progress bar */}
              <Grid item xs={11} sx={progressBarAlignCenter}>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress
                    sx={progressBarStyle}
                    variant="determinate"
                    value={step * 10}
                  />
                </Box>
              </Grid>
              <Grid item xs={1} sx={percentStyle}>
                {step * 10}%
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <div style={{ marginLeft: "5rem" }}>
                  <Answer
                    answer={state.answers[step]}
                    step={step}
                    checkAnswer={checkAnswer}
                    clickedAnswer={clickedAnswer}
                  />
                </div>
              </Grid>
              <Grid item xs={5}>
                <div style={QuestionImgStyle}>
                  <QuestionImg img={state.imgs[step]} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        // result part
        <Grid className="quizMain" item xs={12} height="720px" sx={result}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} mt={1} mb={2}>
              <div className="finalPage">
                <p>SCORE : {score}</p>
                {/* <p>MARKING : {marking}</p> */}
                {/* O/X table */}
                <OxTable
                  ox={ox}
                  setStep={setStep}
                  setDisable={setDisable}
                ></OxTable>
                <div
                  className="restart"
                  onClick={() => {
                    location.reload();
                  }}
                >
                  RESTART
                </div>
              </div>
            </Grid>
            <Grid item xs={3} mt={2} pl={2}></Grid>
          </Grid>
          {disable === true ? (
            // 정답지
            <div>
              <div className="question">
                <Question question={state.questions[step]} />
              </div>
              <Grid container mb="2%">
                <Grid
                  item
                  xs={12}
                  //white bar
                  sx={whiteBarStyle}
                ></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={7}>
                  <div style={{ marginLeft: "5rem" }}>
                    <Correct
                      answer={state.answers[step]}
                      step={step}
                      correctAnswer={state.correctAnswers[step]}
                    />
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <div style={QuestionImgStyle}>
                    <QuestionImg img={state.imgs[step]} />
                  </div>
                </Grid>
              </Grid>
            </div>
          ) : (
            <p className="confirmGuide">
              문제 번호를 눌려 정답을 확인해보세요.
            </p>
          )}
        </Grid>
      )}
    </>
  );
}
export default QuizMain;
