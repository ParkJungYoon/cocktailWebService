import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Secondpage() {
  const navigate = useNavigate();

  // style
  const containerStyle = {
    bgcolor: "rgba(64,64,64,0.6)",
    width: "80%",

    height: "60%",
    mx: "auto",
    mt: "10%",
    px: 3,
    borderRadius: "15px",
    alignItems: "center",
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
          xs={12}
          sx={{
            color: "white",
            ml: 10,
            mt: 2,
          }}
        >
          <Typography variant="h4">Test your cocktail</Typography>

          <Typography variant="h4" sx={{ mb: 3 }}>
            knowledge
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

        <Grid item xs={12} sx={{ color: "white", textAlign: "right", mr: 10 }}>
          <Typography variant="h4">How about</Typography>
          <Typography variant="h4">MBTI Cocktail</Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Test
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
