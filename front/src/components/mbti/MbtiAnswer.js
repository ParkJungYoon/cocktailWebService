import React from "react";
import { Container, Button, LinearProgress, Typography } from "@mui/material";

const MbtiAnswer = (props) => {
  const btnStyle = {
    py: 2,
    mt: 2,
    mx: "auto",
    width: "70vw",
    border: "3px solid gray",
    borderRadius: "1rem",
    color: "white",
    fontSize: "20px",
    "&:hover": { backgroundColor: "rgba(128, 128, 128, 0.5)" },
  };
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <Container sx={{ textAlign: "center" }} key={i}>
      <Button
        className="btn"
        sx={btnStyle}
        onClick={() => props.checkAnswer(qAnswer)}
      >
        {props.answer[qAnswer]}
      </Button>
    </Container>
  ));

  return <>{answers}</>;
};

export default MbtiAnswer;
