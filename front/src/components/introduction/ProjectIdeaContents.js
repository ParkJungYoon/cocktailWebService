import React from "react";
import { Box, Grid, Container } from "@mui/material";
import "../../scss/Introduction.scss";
import What from "../../imgs/what.jpg";
import dylc from "../../imgs/doyoulikecocktail.jpg";
import alcohol from "../../imgs/alcohol.png";

function ProjectIdeaContents() {
  return (
    <div className="ProjectIdeaContents">
      <Container sx={{ textAlign: "center", fontSize: "50px" }}>
        <h1>🍸저쪽 손님께서 보내신 겁니다.</h1>
        <img
          className=""
          src={What}
          alt=""
          width="50%"
          // height="80%"
        />
        <br />
        <div className="intro" style={{ marginTop: "5rem" }}>
          프로젝트 소개
          <Box className="alcohol" mt={2}>
            <p className="title">
              <span className="highlight">
                **칵린이들을 위한 칵테일 추천 서비스**
              </span>
            </p>

            <p className="text">
              우리나라의 칵테일 소비 증진을 위한 칵테일 소개 및 레시피 공유,
              추천 각국의 세계 주류 소비량을 비교해보면 우리나라는 칵테일 소비에
              비해 맥주 소비량이 월등히 높다. 이 그래프를 보면 우리나라는 칵테일
              소비가 적고 인지도가 낮다는 것을 알 수 있다.
            </p>
            <Box className="text">
              따라서 우리는 칵테일을 소개해주는 서비스를 만들고자 한다. <br />
              하지만 칵테일을 소개만 한다면 입문자가 아무 칵테일이나 골라 곧바로
              만들기 쉽지 않을 것이다. <br />
              데이터분석을 토대로 인기 있는 칵테일 정보를 제공하고, 사용자가
              가지고 있는 최소한의 재료로 만 들 수 있는 칵테일을 추천해줌으로써
              칵테일의 진입장벽을 낮추고자 한다.
            </Box>
            <Box className="chart" mt={2}>
              <img
                className=""
                src={alcohol}
                alt=""
                width="80%"
                // height="80%"
              />
              <br />
              다른 나라와의 칵테일 소비량 및 인지도 차이
            </Box>
          </Box>
        </div>
        <div className="goal" style={{ marginTop: "5rem" }}>
          프로젝트 목적
          <Box className="dylc">
            <p className="title">프로젝트 아이디어 동기</p>
            <Grid container>
              <Grid item xs={6} md={6}>
                <img
                  className=""
                  src={dylc}
                  alt=""
                  width="70%"
                  // height="80%"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <div className="text">
                  <p>
                    때는 바야흐로 Kaggle에서 데이터를 찾던 4월 19일... <br />
                    <br />
                    **진영님** : 혹시 칵테일 잘 아시나요? <br />
                    **그 외 팀원** : 아니요... 잘 모르는데... <br />
                    **진영님** : 그러면 Kaggle에서 칵테일 데이터를 찾았는데
                    칵테일을 소개하는 프로젝트를 하면 어떨까요?
                  </p>
                </div>
              </Grid>
              <Box className="text">
                <p>
                  <span className="highlight">**칵테일 정의**</span>
                  <br />
                  <span className="bold">
                    **칵테일은 술과 여러 종류의 음료, 첨가물 등을 섞어 만든
                    혼합주를 일컫는다**
                  </span>
                  <br />
                  <br />
                  소맥, 꿀주, 링겔주 등등...
                  <br />
                  사실 우리는 그동안 알게 모르게 칵테일을 마셔왔습니다.
                  <br />
                  평소 술자리에서 개인의 취향에 맞게 커스터마이징 해 먹던 술이
                  바로 칵테일이거든요.
                  <br />
                  <br />
                  **하지만 아직 많은 사람이 칵테일을 어렵고 멀게만 생각하고
                  있습니다.**
                  <br />
                  <br />
                  저희는 사용자가 나만의 칵테일을 마음껏 공유하고, 사용자가
                  가지고 있는 재료 정보를 받아 쉽게 만들 수 있는 칵테일을 추천해
                  줌으로써 이런 문제점을 해결하고자 합니다
                </p>
              </Box>
            </Grid>
          </Box>
        </div>
      </Container>
      <Box sx={{ backgroundColor: "white" }}>asd</Box>
    </div>
  );
}

export default ProjectIdeaContents;
