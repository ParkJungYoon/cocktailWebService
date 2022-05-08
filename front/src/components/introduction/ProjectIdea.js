import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import What from "../../imgs/what.png";
import dylc from "../../imgs/doyoulikecocktail.jpg";
import alcohol from "../../imgs/alcohol.png";
import Chart from "./SpiritChart.js";

export default function ProjectIdea() {
  return (
    <Container
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(64, 64, 64, 0.4)",
        py: 10,
        width: "70vw",
        borderRadius: "1.5rem",
      }}
    >
      <Box sx={{ px: 5 }}>
        <Typography
          variant="h3"
          sx={{
            textShadow:
              "0 0 42px #529, 0 0 82px #529, 0 0 92px #529, 0 0 102px #529, 0 0 151px #529",
            p: 2,
            fontFamily: "YUniverse-B",
          }}
        >
          🍸저쪽 손님께서 보내신 겁니다.
        </Typography>
        <Box
          component="img"
          src={What}
          alt=""
          width="60%"
          minWidth="250px"
          sx={{ my: 3 }}
        />
      </Box>

      <Box sx={{ px: 5 }}>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "rgba(0,0,0,0.4)",
            p: 2,
          }}
        >
          Project Introduction
        </Typography>
        <Box sx={{ my: 3 }}>
          <Typography
            component="span"
            variant="h5"
            sx={{ backgroundColor: "rgba(87,24,146,0.3)", p: 1 }}
          >
            칵린이들을 위한 칵테일 추천 서비스
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.4)",
            p: 3,
            my: 3,
            textAlign: "left",
          }}
        >
          <Typography variant="h6">
            우리나라의 칵테일 소비 증진을 위한 칵테일 소개 및 레시피 공유, 추천
            각국의 세계 주류 소비량을 비교해보면 우리나라는 칵테일 소비에 비해
            맥주 소비량이 월등히 높습니다.
          </Typography>
          <br />
          <Typography variant="h6">
            이 그래프를 보면 우리나라는 칵테일 소비가 적고 인지도가 낮다는 것을
            알 수 있습니다.
          </Typography>
          <br />
          <Typography variant="h6">
            따라서 우리는 칵테일을 소개해주는 서비스를 만들고자 한다. 하지만
            칵테일을 소개만 한다면 입문자가 아무 칵테일이나 골라 곧바로 만들기
            쉽지 않을 것이다.
          </Typography>
          <br />
          <Typography variant="h6">
            데이터분석을 토대로 인기 있는 칵테일 정보를 제공하고, 사용자가
            가지고 있는 최소한의 재료로 만 들 수 있는 칵테일을 추천해줌으로써
            칵테일의 진입장벽을 낮추고자 한다.
          </Typography>
        </Box>
        <Box width="40%" sx={{ mt: 3 }} />
        <Chart stlye={{ width: "300px" }} />
        <Typography> ↪ 다른 나라와의 칵테일 소비량 및 인지도 차이</Typography>
      </Box>

      <Box sx={{ px: 5 }}>
        <Box sx={{ my: 3 }}>
          <Typography
            sx={{ backgroundColor: "rgba(0,0,0,0.4)", p: 2 }}
            variant="h4"
          >
            Project Goals
          </Typography>
        </Box>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs sx={{ mx: "auto" }}>
            <Box
              component="img"
              src={dylc}
              alt=""
              width="80%"
              minWidth="200px"
            />
          </Grid>
          <Grid
            item
            xs
            sx={{
              textAlign: "left",
              my: "auto",
              p: 3,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 3 }}>
              때는 바야흐로 Kaggle에서 데이터를 찾던 4월 19일...
            </Typography>
            <Typography variant="h6">
              진영 : 혹시 칵테일 잘 아시나요?
            </Typography>
            <Typography variant="h6">
              팀원 : 아니요... 잘 모르는데...
            </Typography>
            <Typography variant="h6">
              진영 : 그러면 Kaggle에서 칵테일 데이터를 찾았는데{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ backgroundColor: "rgba(87,24,146,0.3)", p: 1 }}
              >
                칵테일을 소개하는 프로젝트
              </Typography>
              를 하면 어떨까요?
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="left" sx={{ px: 5, my: 3 }}>
        <Typography
          align="center"
          sx={{ backgroundColor: "rgba(0,0,0,0.4)", p: 2 }}
          variant="h4"
        >
          Cocktail ?
        </Typography>

        <Box sx={{ backgroundColor: "rgba(0,0,0,0.4)", p: 3, my: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography component="span" variant="h6">
              칵테일은 술과 여러 종류의 음료, 첨가물 등을 섞어 만든 혼합주를
              말합니다. 소맥, 꿀주, 링겔주 등등... 사실 우리는 그동안 알게
              모르게 칵테일을 마셔왔습니다. 평소 술자리에서 개인의 취향에 맞게
              커스터마이징 해 먹던 술이 바로 칵테일이거든요.
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mt: 3 }}>
            하지만 아직 많은 사람이 칵테일을 어렵고 멀게만 생각하고 있습니다.
            저희는 사용자가 나만의 칵테일을 마음껏 공유하고, 사용자가 가지고
            있는 재료 정보를 받아 쉽게 만들 수 있는 칵테일을 추천해 줌으로써
            이런 문제점을 해결하고자 합니다
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
