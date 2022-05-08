/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, LinearProgress, Link } from "@mui/material";
import * as Api from "../../api";
import "../../scss/Mbti.scss";

import MbtiQuestion from "./MbtiQuestion";
import MbtiAnswer from "./MbtiAnswer";
import state from "./MbtiData";

import TypeCheck from "./TypeCheck";

import mbtiImg1 from "../../imgs/mbtiImg1.jpg";
import mbtiImg2 from "../../imgs/mbtiImg2.jpg";
import mbtiImg3 from "../../imgs/mbtiImg3.jpg";
import mbtiImg4 from "../../imgs/mbtiImg4.jpg";

function MbtiMain() {
  const [step, setStep] = useState(1);
  const [clickedAnswer, setClickedAnswer] = useState(0);

  const [countEI, setCountEI] = useState(0);
  const [countSN, setCountSN] = useState(0);
  const [countTF, setCountTF] = useState(0);
  const [countJP, setCountJP] = useState(0);

  const [ox, setOx] = useState("");

  const questionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mx: 15,
    color: "white",
    fontSize: "3vw",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "30vh",
  };

  const progressBarStyle = {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    height: "10px",
    // borderRadius: "0.3rem",
  };

  const mbtiImgOne = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // mt: 3,
    height: "100%",
  };
  const mbtiImgTwo = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };
  const mbtiImgThree = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // mt: 3,
    height: "100%",
  };
  const mbtiImgFour = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  // the method that checks the correct answer
  const checkAnswer = (answer) => {
    if (answer === state.correctAnswers[step]) {
      if (step < 5) {
        if (step === 1) {
          setCountEI(countEI + 2);
        } else setCountEI(countEI + 1);
      } else if (step < 9) {
        if (step === 5) {
          setCountSN(countSN + 2);
        } else setCountSN(countSN + 1);
      } else if (step < 12) {
        if (step === 9) {
          setCountTF(countTF + 1);
        } else setCountTF(countTF + 2);
      } else if (step < 16) {
        if (step === 15) {
          setCountJP(countJP + 2);
        } else setCountJP(countJP + 1);
      }
      setClickedAnswer(answer);
      setOx(ox + "O");
    } else {
      setClickedAnswer(answer);
      setOx(ox + "X");
    }
    setStep(step + 1);
    setClickedAnswer(0);
  };

  return (
    <>
      {step <= Object.keys(state.questions).length ? (
        <>
          {step <= 4 ? (
            <Grid container sx={mbtiImgOne}>
              {/* progress bar */}
              <Box mt={25} sx={{ px: 15, height: 0, width: "100%" }}>
                <LinearProgress
                  sx={progressBarStyle}
                  variant="determinate"
                  value={(step / 15) * 100}
                />
              </Box>
              <Grid item xs={12} sx={questionStyle}>
                <MbtiQuestion question={state.questions[step]} />
              </Grid>
              <Grid item xs sx={{ mx: "auto" }}>
                <MbtiAnswer
                  answer={state.answers[step]}
                  step={step}
                  checkAnswer={checkAnswer}
                  clickedAnswer={clickedAnswer}
                />
              </Grid>
            </Grid>
          ) : (
            <>
              {/* 5~8 step background image change */}
              {step >= 5 && step <= 8 ? (
                <Grid container sx={mbtiImgTwo}>
                  {/* progress bar */}
                  <Box mt={25} sx={{ px: 15, width: "100%" }}>
                    <LinearProgress
                      sx={progressBarStyle}
                      variant="determinate"
                      value={(step / 15) * 100}
                    />
                  </Box>
                  <Grid item xs={12} sx={questionStyle}>
                    <MbtiQuestion question={state.questions[step]} />
                  </Grid>
                  <Grid item xs sx={{ mx: "auto" }}>
                    <MbtiAnswer
                      answer={state.answers[step]}
                      step={step}
                      checkAnswer={checkAnswer}
                      clickedAnswer={clickedAnswer}
                    />
                  </Grid>
                </Grid>
              ) : (
                <>
                  {/* 9~11 step background image change */}
                  {step >= 9 && step <= 11 ? (
                    <Grid container sx={mbtiImgThree}>
                      {/* progress bar */}
                      <Box mt={25} sx={{ px: 15, width: "100%" }}>
                        <LinearProgress
                          sx={progressBarStyle}
                          variant="determinate"
                          value={(step / 15) * 100}
                        />
                      </Box>
                      <Grid item xs={12} sx={questionStyle}>
                        <MbtiQuestion question={state.questions[step]} />
                      </Grid>
                      <Grid item xs sx={{ mx: "auto" }}>
                        <MbtiAnswer
                          answer={state.answers[step]}
                          step={step}
                          checkAnswer={checkAnswer}
                          clickedAnswer={clickedAnswer}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    // {/* 12~15 step background image change */}
                    <Grid container sx={mbtiImgFour}>
                      {/* progress bar */}
                      <Box mt={25} sx={{ px: 15, width: "100%" }}>
                        <LinearProgress
                          sx={progressBarStyle}
                          variant="determinate"
                          value={(step / 15) * 100}
                        />
                      </Box>
                      <Grid item xs={12} sx={questionStyle}>
                        <MbtiQuestion question={state.questions[step]} />
                      </Grid>
                      <Grid item xs sx={{ mx: "auto" }}>
                        <MbtiAnswer
                          answer={state.answers[step]}
                          step={step}
                          checkAnswer={checkAnswer}
                          clickedAnswer={clickedAnswer}
                        />
                      </Grid>
                    </Grid>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        // result part
        <>
          {/* 결과 출력 */}
          <TypeCheck
            countEI={countEI}
            countSN={countSN}
            countTF={countTF}
            countJP={countJP}
          />
        </>
      )}
    </>
  );
}
export default MbtiMain;
