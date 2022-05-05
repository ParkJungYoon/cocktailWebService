/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, LinearProgress, Link } from "@mui/material";
import "../../scss/Mbti.scss";
import linkIcon from "../../imgs/icon-link.png";

import checkState from "./TypeData";

function CopyUrlToClipboard() {
  var dummy = document.createElement("input");
  var text = location.href;

  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("결과 주소가 복사되었습니다. \n주소를 공유해 보세요!");
}

function ResultESTJ() {
  const navigate = useNavigate();
  const typeName = "ESTJ";
  return (
    <div className="mbtiResultPage">
      <Box sx={{ mt: 25, mb: 10 }}>
        <Grid container>
          <Grid item xs={3} height="720px"></Grid>
          <Grid item xs={6} mt={2}>
            <Grid
              container
              pb={3}
              mb={2}
              sx={{
                backgroundColor: "rgba(31, 31, 31, 0.7)",
              }}
            >
              <Grid item xs={1.5}></Grid>
              <Grid item xs={9} mb={3}>
                <div>
                  <p className="mbtiResultTitle">당신은 {typeName}</p>
                  <p className="mbtiResultRecommend">
                    추천 칵테일은{" "}
                    <span style={{ color: "#a300d9" }}>
                      {checkState.types[typeName]}
                    </span>
                  </p>
                  <div className="mbtiResultImgAlingn">
                    <img
                      className="mbtiResultImg"
                      src={checkState.typeImgs[typeName]}
                      alt=""
                    />
                  </div>
                  <p className="mbtiResultText">
                    {checkState.typeInfos[typeName]}
                  </p>
                </div>
              </Grid>
              <Grid item xs={1.5}></Grid>
              <Grid container>
                <Grid item xs={5.95}>
                  <p className="mbtiResultGood">
                    궁합이 좋은 MBTI 칵테일
                    <br />
                    {checkState.good[typeName]}
                  </p>
                  <div className="mbtiResultImgAlingn">
                    <img
                      className="mbtiResultGoodImg"
                      src={checkState.goodImgs[typeName]}
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item xs={0.1} sx={{ backgroundColor: "gray" }}></Grid>
                <Grid item xs={5.95}>
                  <p className="mbtiResultBad">
                    궁합이 별로인 MBTI 칵테일 <br />
                    {checkState.bad[typeName]}
                  </p>
                  <div className="mbtiResultImgAlingn">
                    <img
                      className="mbtiResultBadImg"
                      src={checkState.badImgs[typeName]}
                      alt=""
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ height: "20px" }}></Grid>
            </Grid>
            <Container>
              <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} container>
                  <Grid item xs={6}>
                    <div className="mbtiResultBottonBtns">
                      <div
                        className="mbtiResultLinkShareBtn"
                        onClick={() => CopyUrlToClipboard()}
                      >
                        <img
                          className="mbtiResultLinkShareImg"
                          src={linkIcon}
                          alt=""
                          width="40px"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <Link
                        onClick={() => navigate(`/cocktailTest/mbti`)}
                        sx={{ textDecoration: "none" }}
                      >
                        <div className="mbtiRestartBtn">다시하기</div>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default ResultESTJ;
