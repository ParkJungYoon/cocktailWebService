import React, { useState, useEffect } from "react";
import { Box, Grid, Container, Link } from "@mui/material";
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
      <Grid container>
        <Grid item xs={12}>
          <div className="mbtiResultInfoText">
            <p>테스트 문항을 완료하셨습니다.</p>
            <p>버튼을 눌러 결과를 확인하세요.</p>

            <Link
              onClick={() => navigate(`/cocktailTest/mbti/${onClickButton()}`)}
              sx={{ textDecoration: "none" }}
            >
              <p className="mbtiResultInfoBtn">결과보기</p>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TypeCheck;
