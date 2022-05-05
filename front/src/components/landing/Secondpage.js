import React from "react";
import { Typography, Grid, Link, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Top10Chart from "./Top10Chart";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container sx={{ pt: 5 }}>
        <Grid item xs sx={{ ml: 10 }}>
          <Box sx={{ minWidth: "400px", maxWidth: "600px" }}>
            <Top10Chart />
          </Box>
        </Grid>
        <Grid item xs sx={{ color: "white", textAlign: "right", mx: 10 }}>
          <Box>
            <Typography variant="h5">Starts with</Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Top 10 Cocktails
            </Typography>
          </Box>
          <Box sx={{ my: 5 }}>
            <Typography variant="h6">방문자 수를 통계로</Typography>
            <Typography variant="h6">
              Top10 칵테일을 미리 골라두었습니다.
            </Typography>
            <Typography variant="h6">
              인기가 많은 칵테일을 만나보세요
            </Typography>
          </Box>
          <Box sx={{ ml: 10 }}>
            <Link
              underline="none"
              className="top10Button"
              onClick={() => {
                navigate("/cocktailBar");
              }}
              sx={{ mt: 5 }}
            >
              Explore
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
