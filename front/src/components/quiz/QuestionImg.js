import React from "react";
import { Card, CardMedia } from "@mui/material";

const QuestionImg = (props) => {
  return (
    <>
      <div>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
          backgroundColor="transparent"
        >
          <CardMedia
            component="img"
            image={props.img}
            // alt="image"
            sx={{ width: "100%" }}
          />
        </Card>
      </div>
    </>
  );
};

export default QuestionImg;
