import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import bar from "../../imgs/bar.jpg";
import test from "../../imgs/test.jpg";

export default function Fourthpage() {
  const navigate = useNavigate();

  // style
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const leftContentStyle = {
    height: "100vh",
    color: "white",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${test})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    pt: "40vh",
    textAlign: "center",
  };
  const rightContentStyle = {
    height: "100vh",
    color: "white",
    backgroundPosition: "center",
    backgroundSize: "cover",
    pt: "40vh",
    textAlign: "center",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${bar})`,
  };
  const buttonStyle = {
    position: "relative",
    color: "white",
    border: "2px solid white",
    py: 1,
    px: 3,
    cursor: "pointer",
    zIndex: 10,
    "&:hover": { boxShadow: "0 0 15px rgb(0, 0, 0)" },
  };
  return (
    <>
      <Grid container sx={containerStyle}>
        <Grid item xs={6} sx={leftContentStyle}>
          <Typography variant="h4">칵테일 처음 접하시나요?</Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>
            우선 재밌는 컨텐츠로
            <br /> 칵테일과 친해져볼까요?
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Link
              underline="none"
              className="top10Button"
              onClick={() => {
                navigate("/cocktailTest");
              }}
              sx={buttonStyle}
            >
              Quiz
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sx={rightContentStyle}>
          <Typography variant="h4">라운지에서 직접</Typography>
          <Typography variant="h4">다른 손님에게 나만의</Typography>
          <Typography variant="h4">칵테일을 공유해주세요.</Typography>
          <Box sx={{ mt: 5 }}>
            <Link
              underline="none"
              className="top10Button"
              onClick={() => {
                navigate("/lounge");
              }}
              sx={buttonStyle}
            >
              Lounge
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
