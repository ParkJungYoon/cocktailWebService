import { Typography, Box } from "@mui/material";
import React from "react";

const MbtiQuestion = (props) => {
  return (
    <Typography variant="h5" sx={{}}>
      {props.question}
    </Typography>
  );
};

export default MbtiQuestion;
