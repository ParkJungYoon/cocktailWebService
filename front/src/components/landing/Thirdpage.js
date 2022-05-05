import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import bar from "../../imgs/bar.jpg";
import test from "../../imgs/test.jpg";

export default function Thirdpage() {
  const navigate = useNavigate();

  // style
  const containerStyle = {
    width: "100vw",
    height: "100vh",
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
        <Grid
          item
          xs={6}
          sx={{
            height: "100vh",
            color: "white",
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${test})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            pt: "40%",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">MBTI TEST</Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Quiz 해보실..?
          </Typography>
          <Link
            underline="none"
            className="top10Button"
            onClick={() => {
              navigate("/cocktailTest/quiz");
            }}
            sx={buttonStyle}
          >
            Explore
          </Link>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            height: "100vh",
            color: "white",

            backgroundPosition: "center",
            backgroundSize: "cover",
            pt: "40%",
            textAlign: "center",
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${bar})`,
          }}
        >
          <Typography variant="h4">바에서 직접 다른 손님에게</Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>
            칵테일을 주세요 ^^
          </Typography>

          <Link
            underline="none"
            className="top10Button"
            onClick={() => {
              navigate("/cocktailTest/mbti");
            }}
            sx={buttonStyle}
          >
            Explore
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
