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
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  <p className="resultTitle" style={{ textAlign: "center" }}>
                    당신은 {typeName}
                  </p>
                  <p
                    className="resultRecommend"
                    style={{ fontSize: "35px", textAlign: "center" }}
                  >
                    추천 칵테일은{" "}
                    <span style={{ color: "#a300d9" }}>
                      {checkState.types[typeName]}
                    </span>
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="resultImg"
                      src={checkState.typeImgs[typeName]}
                      alt=""
                      width="350px"
                      style={{
                        borderRadius: "1rem",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                  <p
                    className="resultText"
                    style={{
                      marginTop: "20px",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    {checkState.typeInfos[typeName]}
                  </p>
                </div>
              </Grid>
              <Grid item xs={1.5}></Grid>
              <Grid container>
                <Grid item xs={5.95}>
                  <p
                    className="resultGood"
                    style={{
                      margin: "5px 0 10px 0",
                      textAlign: "center",
                      fontSize: "25px",
                      color: "white",
                    }}
                  >
                    궁합이 좋은 MBTI 칵테일
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="resultGoodImg"
                      src={checkState.typeImgs[typeName]}
                      alt=""
                      width="150px"
                      style={{
                        borderRadius: "1rem",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={0.1} sx={{ backgroundColor: "gray" }}></Grid>
                <Grid item xs={5.95}>
                  <p
                    className="resultBad"
                    style={{
                      margin: "5px 0 10px 0",
                      textAlign: "center",
                      fontSize: "25px",
                      color: "white",
                    }}
                  >
                    궁합이 별로인 MBTI 칵테일
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="resultBadImg"
                      src={checkState.typeImgs[typeName]}
                      alt=""
                      width="150px"
                      style={{
                        borderRadius: "1rem",
                        justifyContent: "center",
                      }}
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="mbtiLinkShareBtn"
                        onClick={() => CopyUrlToClipboard()}
                      >
                        <img
                          className="resultImg"
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
                        <div
                          className="mbtiRestartBtn"
                          style={{ padding: "1px" }}
                        >
                          다시하기
                        </div>
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
