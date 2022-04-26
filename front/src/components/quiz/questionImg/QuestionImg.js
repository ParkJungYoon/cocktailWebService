import React from "react";
// import './Question.css';
import { Card, CardMedia } from "@mui/material";

const QuestionImg = (props) => {
  return (
    <>
      <div>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardMedia
            component="img"
            image={props.img}
            // alt="image"
            sx={{ width: "100%", height: "100%" }}
          />
        </Card>
      </div>
    </>
  );
};

export default QuestionImg;
