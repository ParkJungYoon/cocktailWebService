import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// import video from "../../video/cocktail.webm";
import video from "../../video/cocktail2.webm";

export default function Firstpage() {
  const navigate = useNavigate();

  // style
  const boxStyle = {
    color: "white",
    position: "absolute",
    zIndex: 3,
    right: "5%",
    top: "40%",
  };
  return (
    <>
      <Box sx={boxStyle}>
        <Typography align="right" variant="h6">
          칵테일 좋아하세요?
        </Typography>
        <Typography align="right" variant="h6">
          저쪽 손님께서 보내신 겁니다
        </Typography>
      </Box>
      <Box className="scrollDown">
        <Typography align="center">Scroll Down</Typography>
        <ArrowDownwardIcon />
        <ArrowDownwardIcon />
        <ArrowDownwardIcon />
      </Box>
      <Box className="video">
        <Box component="video" muted autoPlay data-keepplaying loop>
          <Box component="source" src={video} type="video/webm" />
        </Box>
      </Box>
    </>
  );
}
