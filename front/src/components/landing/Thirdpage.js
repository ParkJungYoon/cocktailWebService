import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import WordCloud from "../test/WordCloud";

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <div className="thirdpageContainer">
      <Grid container className="dictionary">
        <Grid item xs className="textWrapper">
          <Box>
            <WordCloud />
          </Box>
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
