import React from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Card from "./CocktailCard";

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
        className="top10"
      >
        <Grid container>
          <Grid item xs={4} align="center">
            <Card
              title={"칵테일 1"}
              body={
                "A cocktail is a mixed drink typically made with a distilled liquor"
              }
              cocktailImg={
                "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              }
            ></Card>
          </Grid>
          <Grid item xs={4} align="center">
            <Card
              cocktailImg={
                "https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              }
              title={"칵테일 2"}
              body={
                "A cocktail is a mixed drink typically made with a distilled liquor"
              }
            ></Card>
          </Grid>
          <Grid item xs={4} align="center">
            <Card
              cocktailImg={
                "https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
              }
              title={"칵테일 3"}
              body={
                "A cocktail is a mixed drink typically made with a distilled liquor"
              }
            ></Card>
          </Grid>
        </Grid>
        <p className="top10Text">
          요즘 가장 <span className="bold">인기있는 칵테일</span>은 무엇인가요?
        </p>
        <p className="gotoTop10" onClick={() => navigate("/top10")}>
          제일 잘 나가는걸로 주세요
        </p>
      </Container>
    </>
  );
}
