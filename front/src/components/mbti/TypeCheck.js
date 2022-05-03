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

            <p>궁합이 좋은 MBTI 칵테일</p>
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
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default TypeCheck;
