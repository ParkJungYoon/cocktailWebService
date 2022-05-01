import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
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
              <Button
                variant="contained"
                className="top10Button"
                onClick={() => {
                  navigate("/cocktailBar");
                }}
              >
                Explore
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
