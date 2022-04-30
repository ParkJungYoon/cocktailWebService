import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import WordCloud from "./WordCloud";

export default function Thirdpage() {
  // const wordCloudStart = useRef();
  // WordCloud(wordCloudStart, {
  //   list: [
  //     ["first", 1],
  //     ["second", 2],
  //     ["third", 3],
  //     ["forth", 4],
  //     ["five", 5],
  //     ["six", 6],
  //     ["seven", 7],
  //   ],
  // });

  const navigate = useNavigate();
  return (
    <div className="thirdpageContainer">
      <Grid container className="dictionary">
        <Grid item xs className="textWrapper">
          <Typography className="dictionaryText" variant="h4">
            Or You can search You can search on Our Cocktail Dictionary
          </Typography>
          {/* <canvas ref={wordCloudStart}></canvas> */} {/* (test-ing) */}
          <Box className="buttonBox">
            <Button
              variant="contained"
              className="dictionaryButton"
              onClick={() => {
                navigate("/dictionary");
              }}
            >
              Explore
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
