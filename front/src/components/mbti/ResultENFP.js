/* eslint no-restricted-globals: ["off"] */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Link } from "@mui/material";
import "../../scss/Mbti.scss";
import linkIcon from "../../imgs/icon-link.png";
import checkState from "./TypeData";
import useUserHook from "../commons/useUserHook";
import { useSnackbar } from "notistack";

function ResultENFP() {
  const typeName = "ENFP";
  const navigate = useNavigate();
  const userState = useUserHook();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function CopyUrlToClipboard() {
    const dummy = document.createElement("input");
    const text = location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    enqueueSnackbar("결과 주소가 복사되었습니다. 주소를 공유해 보세요!");
  }

  const handleRestart = () => {
    if (!userState.user) {
      enqueueSnackbar("Login Required!");
    } else {
      navigate("/cocktailTest/mbti");
    }
  };

  return (
    <div className="mbtiResultPage">
      <Box sx={{ mt: 18, height: "100vh" }}>
        <Container height="100vh" mt={2}>
          <Grid
            container
            pb={8}
            mb={2}
            // 텍스트와 배경 이미지 구분하는 파트
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <Grid item xs>
              <div>
                {/* 첫번째 줄 (=당신은...) */}
                <p
                  style={{
                    margin: "4rem 0 1.4rem 0",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "1.8rem" }}>당신은...</span>
                </p>
                {/* 두세번째 줄 (= 칵테일)*/}
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
                  <span style={{ color: "#c74811", fontSize: "3rem" }}>
                    {checkState.types[typeName]}
                  </span>
                </p>
                {/* 칵테일 이미지 */}
                <div className="mbtiResultImgAlingn">
                  <img
                    className="mbtiResultImg"
                    src={checkState.typeImgs[typeName]}
                    alt=""
                  />
                </div>
                {/* 텍스트 */}
                <p className="mbtiResultText">
                  {checkState.typeInfos[typeName]}
                </p>
              </div>
            </Grid>

            {/* 궁합 */}
            <Grid container mt={4}>
              {/* Good */}
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
              {/* Bad */}
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
                onClick={() => {
                  handleRestart();
                }}
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
export default ResultENFP;
