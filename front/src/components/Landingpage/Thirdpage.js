import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { QuiltedImageList } from "./ThirdpageImg";
import thirdpage from "../../img/thirdpage.png";

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={4}>
      <Grid item xs={1}></Grid>
      <Grid item xs={5} align="left">
        <div className="cocktailsWrapper">
          <div className="cocktailsText">
            <p>
              당신이 원하는 <span className="bold">칵테일</span>이 무엇인가요?
            </p>
            <p>그.. 술.. 이름이 뭐더라..??</p>
          </div>
          <img className="cocktails" src={thirdpage} width="70%" alt="" />
          <p
            className="gotoRecommend"
            onClick={() => {
              navigate("/Recommend");
            }}
          >
            칵테일 찾으러 가기
          </p>
        </div>
      </Grid>
      <Grid item xs={6} align="center">
        <QuiltedImageList sx={{ mr: 10 }} />
      </Grid>
    </Grid>
  );
}
