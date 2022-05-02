import React from "react";
import { Box, Grid, LinearProgress } from "@mui/material";

const MbtiAnswer = (props) => {
  const btnStyle = {
    height: "100px",
    width: "800px",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid gray",
    borderRadius: "1rem",
    color: "white",
    fontSize: "20px",
  };
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      <Grid container className="btn" item xs={12} mt={3} sx={btnStyle}>
        {props.answer[qAnswer]}
      </Grid>
    </div>
  ));

  return (
    <>
      <p className="MbtiAnswer">{answers}</p>
    </>
  );
};

export default MbtiAnswer;
