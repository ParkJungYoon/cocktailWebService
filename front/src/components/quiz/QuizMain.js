/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import "../../scss/QuizMain.scss";
import Question from "./Question";
import QuestionImg from "./QuestionImg";
import Answer from "./Answer";
import Correct from "./Correct";
import OxTable from "./OxTable";
import state from "./QuizData";

function QuizMain(props) {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [clickedAnswer, setClickedAnswer] = useState(0);
  const [marking, setMarking] = useState("");
  const [disable, setDisable] = useState(false);
  const [ox, setOx] = useState("");
  const whiteBarStyle = {
    backgroundColor: "white",
    height: "3px",
    borderRadius: "5px",
  };
  const QuestionNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const QuestionImgStyle = {
    display: "flex",
    justifyContent: "center",
    marginRight: "5rem",
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
    setMarking(marking + answer);
    setStep(step + 1);
    setClickedAnswer(0);
  };

  return (
    <div className="Content">
      {step <= Object.keys(state.questions).length && disable === false ? (
        <>
          <Question question={state.questions[step]} />

          <Grid container mb="3%">
            {/* <Grid item xs={4} md={4}></Grid> */}
            <Grid
              item
              xs={12}
              md={12}
              //white bar
              sx={whiteBarStyle}
            ></Grid>
            {/* <Grid item xs={4} md={4}></Grid> */}
          </Grid>

          <Grid container>
            <Grid item xs={6} md={6}>
              <div style={{ marginLeft: "5rem" }}>
                <Answer
                  answer={state.answers[step]}
                  step={step}
                  checkAnswer={checkAnswer}
                  clickedAnswer={clickedAnswer}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div style={QuestionImgStyle}>
                <QuestionImg img={state.imgs[step]} />
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container>
          <Grid item xs={3} md={3}></Grid>
          <Grid item xs={6} md={6} mt={2}>
            <div className="finalPage">
              <p>SCORE : {score}</p>
              {/* <p>MARKING : {marking}</p> */}
              <OxTable ox={ox}></OxTable>
              <div
                className="restart"
                onClick={() => {
                  location.reload();
                }}
              >
                RESTART
              </div>
            </div>
            <Grid mt={1}>
              <Grid style={{ display: "flex", justifyContent: "center" }}>
                {QuestionNum.map((i) => (
                  <Grid
                    className="QuestionNum"
                    key={i}
                    onClick={() => {
                      setStep(i);
                      setDisable(true);
                    }}
                  >
                    {i}번
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} md={3} mt={2} pl={2}></Grid>
        </Grid>
      )}
      {disable === true ? (
        <div className="quizSheet">
          <Question question={state.questions[step]} />
          <Grid container mb="3%">
            <Grid
              item
              xs={12}
              md={12}
              //white bar
              sx={whiteBarStyle}
            ></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} md={6}>
              <div style={{ marginLeft: "5rem" }}>
                <Correct
                  answer={state.answers[step]}
                  step={step}
                  correctAnswer={state.correctAnswers[step]}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div style={QuestionImgStyle}>
                <QuestionImg img={state.imgs[step]} />
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default QuizMain;
