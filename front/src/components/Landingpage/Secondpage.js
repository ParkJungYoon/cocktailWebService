import * as React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import chart from "../../img/top10_chart.png";
import cocktails from "../../img/secondpage.jpg";
export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Increase the network loading priority of the background image. */}

        <Grid container spacing={2}>
          <Grid item xs={6} className="chartTextWrapper" align="center">
            <p className="chartTextTitle">
              요즘 가장 <span className="bold">인기있는 칵테일</span>은
              무엇인가요?
            </p>
            <img src={chart} alt="chartTop10" />
            <p className="chartText1"></p>
          </Grid>
          <Grid item xs={6}>
            <img src={cocktails} alt="cocktails" width={"100%"} />
          </Grid>
        </Grid>

        <p className="gotoTop10" onClick={() => navigate("/top10")}>
          제일 잘 나가는걸로 주세요
        </p>
      </Container>
    </>
  );
}
