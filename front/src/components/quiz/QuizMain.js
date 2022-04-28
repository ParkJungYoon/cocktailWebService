/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import "./scss/QuizMain.scss";
import Question from "./Question";
import QuestionImg from "./QuestionImg";
import Answer from "./Answer";
import Correct from "./Correct";
import OxTable from "./OxTable";
import StandardShaker from "./img/StandardShaker.jpg";

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

  const state = {
    quiestions: {
      1: "Q1. 술에 술을 섞거나 술에 청량음료나 과즙 음료, 기타 부재료를 이용하여 혼합시킨 것은?",
      2: "Q2. 다음 기구의 이름은?",
      3: "Q3. 다음 설명으로 틀린 것은?",
      4: "Q4. 뜨거운 칵테일은 어떤 것인가?",
      5: "Q5. 칵테일 용어 설명 중 틀린 것은?",
    },
    answers: {
      1: {
        1: "1. 칵테일 ",
        2: "2. 하드 드링크",
        3: "3. 소프트 드링크",
      },
      2: {
        1: "1. 스탠다드 셰이커(Standard Shaker)",
        2: "2. 믹싱 글라스(Mixing Glass)",
        3: "3. 스트레이너(Strainer)",
      },
      3: {
        1: "1. 버진은 논 알코올이 칵테일이다.",
        2: "2. 막테일은 논 알코올이 칵테일이다.",
        3: "3. 체이서는 칵테일 가니쉬 중 하나이다.",
      },
      4: {
        1: "1. Pink Lady",
        2: "2. Irish Coffee",
        3: "3. Pina Colada",
      },
      5: {
        1: "1. Stir : 잘 섞이도록 저어 주는 것.",
        2: "2. Float : 한가지의 술에 다른 술이 혼합되지 않게 띄우는 것.",
        3: "3. Strainer : 과육을 제거하고 껍데기만을 짜 넣는다는 의미.",
        // Strainer → 믹싱글라스에 혼합한 술을 따를 때 얼음이 흘러나오지 않도록 걸러주기 위해 사용하는 도구.
      },
    },
    correctAnswers: {
      1: "1",
      2: "1",
      3: "3",
      4: "2",
      5: "3",
    },
    imgs: {
      1: " ",
      2: StandardShaker,
      3: " ",
      4: " ",
      5: " ",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
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
      {step <= Object.keys(state.quiestions).length && disable === false ? (
        <>
          <Question question={state.quiestions[step]} />

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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "5rem",
                  // marginTop: "1rem",
                  // marginBottom: "1rem",
                }}
              >
                <QuestionImg img={state.imgs[step]} />
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container>
          <Grid item xs={3} md={3}></Grid>
          <Grid item xs={6} md={6} mt={2}>
            <div
              className="finalPage"
              style={{ display: "grid", padding: "1rem" }}
            >
              <p>SCORE : {score}</p>
              {/* <p>MARKING : {marking}</p> */}
              <OxTable ox={ox}></OxTable>
              <div>
                <div
                  className="restart"
                  onClick={() => {
                    location.reload();
                  }}
                >
                  RESTART
                </div>
              </div>
            </div>
            <Grid mt={1}>
              <Grid style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(1);
                    setDisable(true);
                  }}
                >
                  1번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(2);
                    setDisable(true);
                  }}
                >
                  2번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(3);
                    setDisable(true);
                  }}
                >
                  3번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(4);
                    setDisable(true);
                  }}
                >
                  4번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(5);
                    setDisable(true);
                  }}
                >
                  5번
                </div>
                {/* </Grid>
              <Grid> */}
                <div
                  className="problem"
                  onClick={() => {
                    setStep(1);
                    setDisable(true);
                  }}
                >
                  1번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(2);
                    setDisable(true);
                  }}
                >
                  2번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(3);
                    setDisable(true);
                  }}
                >
                  3번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(4);
                    setDisable(true);
                  }}
                >
                  4번
                </div>
                <div
                  className="problem"
                  onClick={() => {
                    setStep(5);
                    setDisable(true);
                  }}
                >
                  5번
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} md={3} mt={2} pl={2}></Grid>
        </Grid>
      )}
      {disable === true ? (
        <div style={{ marginTop: "2rem" }}>
          <Question question={state.quiestions[step]} />
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "5rem",
                }}
              >
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
