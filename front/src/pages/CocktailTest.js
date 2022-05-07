import React, { useState } from "react";
import useUserHook from "../components/commons/useUserHook";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";

function CocktailTest() {
  const navigate = useNavigate();
  const userState = useUserHook();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // style
  const buttonStyle = {
    color: "white",
    py: 4,
    px: 10,
    bgcolor: "rgba(128, 128, 128, 0.1)",
    border: "1px solid white",
    "&:hover": { bgcolor: "rgba(128, 128, 128, 0.4)" },
  };
  const handleMbtiBtn = () => {
    if (!userState.user) {
      enqueueSnackbar("Login Required!");
    } else {
      navigate("/cocktailTest/mbti");
    }
  };

  return (
    <div className="cocktailTest">
      <Grid container sx={{ mt: "40vh" }}>
        <Grid item xs textAlign="center">
          <Typography variant="h5" sx={{ color: "white", mb: 3 }}>
            10개의 퀴즈로
            <br /> 알아보는 칵테일 상식
          </Typography>
          <Button
            sx={buttonStyle}
            onClick={() => navigate("/cocktailTest/quiz")}
          >
            QUIZ
          </Button>
        </Grid>
        <Grid item xs textAlign="center">
          <Typography
            align="center"
            variant="h5"
            sx={{ color: "white", mb: 3 }}
          >
            MBTI 테스트를 통해
            <br /> 알아보는 맞춤 칵테일
          </Typography>
          <Button
            sx={buttonStyle}
            onClick={() => {
              handleMbtiBtn();
            }}
          >
            MBTI
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default CocktailTest;
