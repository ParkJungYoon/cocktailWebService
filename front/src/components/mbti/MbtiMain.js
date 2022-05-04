/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, LinearProgress, Link } from "@mui/material";
import * as Api from "../../api";
import "../../scss/Mbti.scss";

import MbtiQuestion from "./MbtiQuestion";
import MbtiAnswer from "./MbtiAnswer";
import state from "./MbtiData";

import checkState from "./TypeData";
import TypeCheck from "./TypeCheck";

import mbtiImg1 from "../../imgs/mbtiImg1.jpg";
import mbtiImg2 from "../../imgs/mbtiImg2.jpg";
import mbtiImg3 from "../../imgs/mbtiImg3.jpg";
import mbtiImg4 from "../../imgs/mbtiImg4.jpg";

function MbtiMain() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [clickedAnswer, setClickedAnswer] = useState(0);
  const [disable, setDisable] = useState(false);

  const [countEI, setCountEI] = useState(0);
  const [countSN, setCountSN] = useState(0);
  const [countTF, setCountTF] = useState(0);
  const [countJP, setCountJP] = useState(0);

  const [ox, setOx] = useState("");
  const [mbtiStep, setMbtiStep] = useState("");

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

  const onClickButton = () => {
    const data = mbtiCheck();
    const mbti = `${data.countEI}${data.countSN}${data.countTF}${data.countJP}`;
    setMbtiStep(mbti);
    setDisable(true);
  };

  const mbtiCheck = () => {
    return {
      countEI: countEI > 2 ? "E" : "I",
      countSN: countSN > 2 ? "S" : "N",
      countTF: countTF > 2 ? "T" : "F",
      countJP: countJP > 2 ? "J" : "P",
    };
  };

  const resultRestartBtn = {
    display: "inline",
    padding: "5px",
    border: "1px solid white",
  };

  return (
    <>
      {step <= Object.keys(state.questions).length && disable === false ? (
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
              <div
                style={{
                  color: "White",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                {/* 결과 출력 */}
                {disable === true ? (
                  <>
                    <div>
                      <TypeCheck
                        mbtiStep={mbtiStep}
                        type={checkState.types[mbtiStep]}
                        typeImg={checkState.typeImgs[mbtiStep]}
                        typeInfo={checkState.typeInfos[mbtiStep]}
                        onClickButton={onClickButton}
                      ></TypeCheck>
                    </div>
                    <div
                      className="btn"
                      style={resultRestartBtn}
                      onClick={() => {
                        location.reload();
                      }}
                    >
                      다시하기
                    </div>
                    <Grid mb={10}></Grid>
                  </>
                ) : (
                  <div>
                    <p>테스트 문항을 완료하셨습니다.</p>
                    <p>버튼을 눌러 결과를 확인하세요.</p>
                    <div
                      className="btn"
                      style={resultRestartBtn}
                      onClick={onClickButton}
                    >
                      결과보기
                    </div>
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default MbtiMain;
