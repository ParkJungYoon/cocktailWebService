import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Top10Chart from "./Top10Chart";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="secondpageContainer">
        <Grid container className="top10">
          <Grid item xs={8} className="top10ChartWrapper">
            <Box className="top10Chart">
              <Top10Chart />
            </Box>
          </Grid>
          <Grid item xs={4} className="top10TextWrapper">
            <Typography className="top10Text" variant="h4">
              Starts with
            </Typography>
            <Typography className="top10Text" variant="h4">
              Top 10 Cocktails
            </Typography>
            <Box className="buttonBox">
              <Link
                className="top10Button"
                underline="none"
                onClick={() => {
                  navigate("/cocktailBar");
                }}
              >
                Explore
              </Link>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
