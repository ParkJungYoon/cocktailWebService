import { Typography } from "@mui/material";
import React from "react";
import "../../scss/Quiz.scss";

const Question = (props) => {
  const questionStyle = {
    paddingLeft: "15px",
    my: 3,
    color: "white",
    textAlign: "left",
  };
  return (
    <Typography variant="h5" sx={questionStyle}>
      {props.question}
    </Typography>
  );
};

export default Question;
