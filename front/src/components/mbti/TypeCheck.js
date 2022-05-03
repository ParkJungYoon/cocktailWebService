import React from "react";
import { Box, Grid, Container } from "@mui/material";

const TypeCheck = (props) => {
  return (
    <>
      <Grid container mb={2} sx={{ border: "3px solid gray" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div>
            <p style={{ textAlign: "center" }}>당신은 {props.mbtiStep}</p>
            <p style={{ textAlign: "center" }}>추천 칵테일은 {props.type}</p>
            <div style={{ textAlign: "center" }}>
              <img
                className=""
                src={props.typeImg}
                alt=""
                width="350px"
                style={{
                  borderRadius: "1rem",
                  justifyContent: "center",
                }}
              />
            </div>
            <p>블라블라</p>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid container>
          <Grid item xs={5.95}>
            <p style={{ margin: "5px" }}>궁합이 좋은 MBTI 칵테일</p>
            <div style={{ textAlign: "center" }}>
              <img
                className=""
                src={props.typeImg}
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
            <p style={{ margin: "5px" }}>궁합이 별로인 MBTI 칵테일</p>
            <div style={{ textAlign: "center" }}>
              <img
                className=""
                src={props.typeImg}
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
    </>
  );
};

export default TypeCheck;
