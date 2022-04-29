import React from "react";
import { Box } from "@mui/material";

const QuestionImg = (props) => {
  return (
    <>
      <div>
        <Box>
          <img
            className=""
            src={props.img}
            alt=""
            width="100%"
            style={{
              borderRadius: "1rem",
              justifyContent: "center",
            }}
          />
        </Box>
      </div>
    </>
  );
};

export default QuestionImg;
