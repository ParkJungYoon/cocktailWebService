import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Top10Chart from "./Top10Chart";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="secondpageContainer">
        <Grid container>
          <Grid item xs sx={{ zIndex: 1 }}>
            <Top10Chart />
          </Grid>
          <Grid item xs sx={{ zIndex: 1 }}>
            <Typography variant="h4">Starts with</Typography>
            <Typography variant="h4">Top 10 Cocktails</Typography>
            <Link
              className="top10Button"
              underline="none"
              onClick={() => {
                navigate("/cocktailBar");
              }}
            >
              Explore
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
