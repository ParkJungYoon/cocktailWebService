import React from "react";
import { Typography, Grid, Link, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Top10Chart from "./Top10Chart";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs sx={{ ml: 5 }}>
          <Box sx={{ minWidth: "500px", maxWidth: "800px" }}>
            <Top10Chart />
          </Box>
        </Grid>
        <Grid item xs sx={{ color: "white", ml: 5 }}>
          <Box textAlign={"left"}>
            <Typography variant="h4">Starts with</Typography>
            <Typography variant="h4" sx={{ mb: 3 }}>
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
