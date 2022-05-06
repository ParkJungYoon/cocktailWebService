import React, { useState, useEffect } from "react";
import { Button, Grid, Container, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TypeCheck = ({ countEI, countSN, countTF, countJP }) => {
  const navigate = useNavigate();
  const mbtiCheck = () => {
    return {
      countEI: countEI > 2 ? "E" : "I",
      countSN: countSN > 2 ? "S" : "N",
      countTF: countTF > 2 ? "T" : "F",
      countJP: countJP > 2 ? "J" : "P",
    };
  };
  const onClickButton = () => {
    const data = mbtiCheck();
    const mbti = `${data.countEI}${data.countSN}${data.countTF}${data.countJP}`;
    return mbti;
  };

  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: "rgba(64,64,64,0.6)",
          width: "100vw",
          height: "60%",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sx={{ color: "white", textAlign: "center" }}>
          <Typography variant="h4">테스트 문항을 완료하셨습니다.</Typography>
          <Typography variant="h4">버튼을 눌러 결과를 확인하세요.</Typography>

          <Link
            onClick={() => navigate(`/cocktailTest/mbti/${onClickButton()}`)}
            sx={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: "white",
                mt: 3,
                fontSize: "2vw",
                "&:hover": { color: "#ff3897" },
              }}
            >
              결과보기
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default TypeCheck;
