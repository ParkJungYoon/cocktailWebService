import React from "react";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import video from "../../video/cocktail.webm";

export default function Firstpage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="introTextWrapper">
        <div className="introText1">
          <p>칵테일 좋아하세요?</p>
          <p>저쪽 손님께서 보내신 겁니다</p>
        </div>
        <Link
          className="introButton"
          underline="none"
          onClick={() => navigate("/dictionary")}
        >
          칵테일 한 잔 하러 가기
        </Link>
      </div>
      <div className="scrollDown">
        <p>Scroll Down</p>
        <ArrowDownwardIcon />
        <ArrowDownwardIcon />
        <ArrowDownwardIcon />
      </div>
      <div className="video">
        <video muted autoPlay data-keepplaying loop>
          <source src={video} type="video/webm" />
        </video>
      </div>
    </>
  );
}
