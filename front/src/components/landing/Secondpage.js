import React from "react";
import { Typography, Grid, Link, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Top10Chart from "./Top10Chart";

export default function Secondpage() {
  const navigate = useNavigate();

  // style
  const chartStyle = {
    mt: 15,
    width: "600px",
    ml: "10vw",
  };
  const textStyle = {
    position: "relative",
    color: "white",
    textAlign: "right",
    my: "auto",
    mr: "15vw",
  };
  const textShadowStyle = {
    color: "white",
    textShadow:
      "0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
  };
  return (
    <>
      <Grid container>
        <Grid item xs sx={chartStyle}>
          <Top10Chart />
        </Grid>
        <Grid item xs sx={textStyle}>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h6">방문자 수를 통계로</Typography>
            <Typography variant="h6" sx={textShadowStyle}>
              Top10 칵테일을 미리 골라두었습니다.
            </Typography>
            <Typography variant="h6">
              인기가 많은 칵테일을 만나보세요
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Link
              underline="none"
              className="top10Button"
              onClick={() => {
                navigate("/cocktailBar");
              }}
            >
              Explore
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
