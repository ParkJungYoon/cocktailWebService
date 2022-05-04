/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, LinearProgress, Link } from "@mui/material";
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
    height: "300px",
    display: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };

  const mbtiImgOne = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg1})`,
    backgroundSize: "cover",
  };
  const mbtiImgTwo = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg2})`,
    backgroundSize: "cover",
  };
  const mbtiImgThree = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg3})`,
    backgroundSize: "cover",
  };
  const mbtiImgFour = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg4})`,
    backgroundSize: "cover",
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
            <Box mt={3} height="700px" sx={mbtiImgOne}>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} mt={4} sx={questionStyle}>
                  <div className="Question">
                    <MbtiQuestion question={state.questions[step]} />
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
                {/* btn */}
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MbtiAnswer
                      answer={state.answers[step]}
                      step={step}
                      checkAnswer={checkAnswer}
                      clickedAnswer={clickedAnswer}
                    />
                  </div>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <>
              {/* 5~8 step background image change */}
              {step >= 5 && step <= 8 ? (
                <Box mt={3} height="700px" sx={mbtiImgTwo}>
                  <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} mt={4} sx={questionStyle}>
                      <div className="Question">
                        <MbtiQuestion question={state.questions[step]} />
                      </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    {/* btn */}
                    <Grid item xs={12}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MbtiAnswer
                          answer={state.answers[step]}
                          step={step}
                          checkAnswer={checkAnswer}
                          clickedAnswer={clickedAnswer}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <>
                  {/* 9~11 step background image change */}
                  {step >= 9 && step <= 11 ? (
                    <Box mt={3} height="700px" sx={mbtiImgThree}>
                      <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8} mt={4} sx={questionStyle}>
                          <div className="Question">
                            <MbtiQuestion question={state.questions[step]} />
                          </div>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        {/* btn */}
                        <Grid item xs={12}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <MbtiAnswer
                              answer={state.answers[step]}
                              step={step}
                              checkAnswer={checkAnswer}
                              clickedAnswer={clickedAnswer}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    // {/* 12~15 step background image change */}
                    <Box mt={3} height="700px" sx={mbtiImgFour}>
                      <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8} mt={4} sx={questionStyle}>
                          <div className="Question">
                            <MbtiQuestion question={state.questions[step]} />
                          </div>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        {/* btn */}
                        <Grid item xs={12}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <MbtiAnswer
                              answer={state.answers[step]}
                              step={step}
                              checkAnswer={checkAnswer}
                              clickedAnswer={clickedAnswer}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        // result part
        <Grid item xs={12} height="720px">
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} mt={5}>
              {/* 결과 출력 */}
              <div>
                <TypeCheck
                  countEI={countEI}
                  countSN={countSN}
                  countTF={countTF}
                  countJP={countJP}
                ></TypeCheck>
              </div>
              <Grid mb={10}></Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default MbtiMain;
