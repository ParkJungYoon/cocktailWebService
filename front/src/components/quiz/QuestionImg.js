import React from "react";
import { Box } from "@mui/material";

const QuestionImg = (props) => {
  return (
    <>
      <Box
        component="img"
        src={props.img}
        alt=""
        width="30vw"
        maxWidth="250px"
        sx={{ borderRadius: "1rem" }}
      />
    </>
  );
};

export default QuestionImg;
