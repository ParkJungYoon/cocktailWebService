/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { Box, Grid, LinearProgress } from "@mui/material";
import "../../scss/Mbti.scss";

import MbtiQuestion from "./MbtiQuestion";
import MbtiAnswer from "./MbtiAnswer";
import state from "./MbtiData";
// import MbtiResult from "./MbtiResult";

import mbtiImg from "../../imgs/mbtiImg.jpg";

function MbtiMain() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [clickedAnswer, setClickedAnswer] = useState(0);
  const [countEI, setCountEI] = useState(0);
  const [countSN, setCountSN] = useState(0);
  const [countTF, setCountTF] = useState(0);
  const [countJP, setCountJP] = useState(0);
  const [co, setCo] = useState("");

  const questionStyle = {
    height: "300px",
    display: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };

  const mbtiImgStyle = {
    // borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg})`,
    backgroundSize: "cover",
  };

  // the method that checks the correct answer
  const checkAnswer = (answer) => {
    if (answer === state.correctAnswers[step]) {
      if (step < 6) {
        setCountEI(countEI + 1);
      } else if (step < 11) {
        setCountSN(countSN + 1);
      } else if (step < 16) {
        setCountTF(countTF + 1);
      } else if (step < 21) {
        setCountJP(countJP + 1);
      }
      setClickedAnswer(answer);
    } else {
      setClickedAnswer(answer);
    }
    // setMarking(marking + answer);
    setStep(step + 1);
    setClickedAnswer(0);
  };

  // const MbtiResult = ({ countEI, countSN, countTF, countJP }) => {
  //   if (countEI > 2) {
  //     setCo(co + "E");
  //   } else setCo(co + "I");

  //   if (countSN > 2) {
  //     setCo(co + "S");
  //   } else setCo(co + "N");

  //   if (countTF > 2) {
  //     setCo(co + "T");
  //   } else setCo(co + "F");

  //   if (countJP > 2) {
  //     setCo(co + "J");
  //   } else setCo(co + "P");
  // };

  return (
    <>
      {step <= Object.keys(state.questions).length ? (
        <>
          <Box mt={3} height="700px" sx={mbtiImgStyle}>
            <Grid container>
              <Grid item xs={2} md={2}></Grid>
              <Grid item xs={8} md={8} mt={4} sx={questionStyle}>
                <div className="Question">
                  <MbtiQuestion question={state.questions[step]} />
                </div>
              </Grid>
              <Grid item xs={2} md={2}></Grid>

              {/* btn */}
              <Grid item xs={12} md={12}>
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
        </>
      ) : (
        // result part
        <Grid item xs={12} md={12} height="720px">
          <Grid container>
            <Grid item xs={3} md={3}></Grid>
            <Grid item xs={6} md={6} mt={1} mb={2}>
              <div style={{ color: "White", fontSize: "30px" }}>
                <p>countEI : {countEI}</p>
                <p>countSN : {countSN}</p>
                <p>countTF : {countTF}</p>
                <p>countJP : {countJP}</p>
                {/* <p>co : {MbtiResult(countEI, countSN, countTF, countJP)}</p> */}
                {/* {MbtiResult(countEI, countSN, countTF, countJP)} */}
                <p>coco:{co}</p>
              </div>
            </Grid>
            <Grid item xs={3} md={3} mt={2} pl={2}></Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default MbtiMain;
