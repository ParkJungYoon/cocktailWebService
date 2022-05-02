/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import { Box, Grid, LinearProgress } from "@mui/material";
import "../../scss/Mbti.scss";
import mbtiImg from "../../imgs/mbtiImg.jpg";
// import * as Api from "../../api";

function MbtiMain() {
  //   const [select, setSelect] = useState(0);

  const questionStyle = {
    height: "300px",
    display: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };
  const btnStyle = {
    height: "100px",
    display: "center",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid gray",
    borderRadius: "1rem",
    color: "white",
    fontSize: "20px",
  };

  const mbtiImgStyle = {
    // borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mbtiImg})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <Box mt={3} height="700px" sx={mbtiImgStyle}>
        <Grid container>
          <Grid item xs={2} md={2}></Grid>
          <Grid item xs={8} md={8} mt={4} sx={questionStyle}>
            문제
          </Grid>
          <Grid item xs={2} md={2}></Grid>
          {/* btn1 */}
          <Grid item xs={3.5} md={3.5}></Grid>
          <Grid
            className="btn"
            item
            xs={5}
            md={5}
            mt={7}
            sx={btnStyle}
            // onClick={() => {
            //   setSelect(1);
            // }}
          >
            버튼1
          </Grid>
          <Grid item xs={3.5} md={3.5}></Grid>
          {/* btn2 */}
          <Grid item xs={3.5} md={3.5}></Grid>
          <Grid className="btn" item xs={5} md={5} mt={5} sx={btnStyle}>
            버튼2
          </Grid>
          <Grid item xs={3.5} md={3.5}></Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
      </Box>
    </>
  );
}
export default MbtiMain;
