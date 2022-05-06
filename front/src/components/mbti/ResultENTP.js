/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Link } from "@mui/material";
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

function ResultENTP() {
  const navigate = useNavigate();
  const typeName = "ENTP";
  return (
    <div className="mbtiResultPage">
      <Box sx={{ mt: 18, height: "100vh" }}>
        <Container height="100vh" mt={2}>
          <Grid
            container
            pb={8}
            mb={2}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <Grid item xs>
              <div>
                <p
                  style={{
                    margin: "4rem 0 1.4rem 0",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "1.8rem" }}>당신은...</span>
                </p>
                <p
                  style={{
                    marginBottom: "3rem",
                    color: "white",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>
                    {checkState.text[typeName]}
                  </span>
                  <br />
                  <span style={{ color: "#f9a602", fontSize: "3rem" }}>
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
            <Grid container mt={4}>
              <Grid item xs>
                <p className="mbtiResultGood">
                  너 내 동료가 되라!
                  <br />
                  <span style={{ color: "#00ffe5" }}>
                    {checkState.good[typeName]}
                  </span>
                </p>
                <div className="mbtiResultImgAlingn">
                  <img
                    className="mbtiResultGoodImg"
                    src={checkState.goodImgs[typeName]}
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs sx={{ borderLeft: "3px solid  gray" }}>
                <p className="mbtiResultBad">
                  네? 저요?? 아... <br />
                  <span style={{ color: "#c40000" }}>
                    {checkState.bad[typeName]}
                  </span>
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

            {/* Link btn & Restart */}
            <Grid item xs mt={3} sx={{ textAlign: "center" }}>
              {/* Link btn */}
              <Button
                className="mbtiResultLinkShareBtn"
                onClick={() => CopyUrlToClipboard()}
              >
                <img
                  className="mbtiResultLinkShareImg"
                  src={linkIcon}
                  alt=""
                  width="40px"
                />
              </Button>
              {/* restart */}
              <Link
                onClick={() => navigate(`/cocktailTest/mbti`)}
                sx={{ textDecoration: "none" }}
              >
                <Button className="mbtiRestartBtn">다시하기</Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
export default ResultENTP;
