import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Top10Chart from "./Top10Chart";
import { height } from "@mui/material/node_modules/@mui/system";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} sx={{ zIndex: 1, color: "white", mt: 30, mr: 10 }}>
          <Box textAlign={"right"}>
            <Typography variant="h4">Starts with</Typography>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Top 10 Cocktails
            </Typography>
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
        <Grid item xs sx={{ zIndex: 1, mb: 10 }}>
          <Box
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            <Top10Chart />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
