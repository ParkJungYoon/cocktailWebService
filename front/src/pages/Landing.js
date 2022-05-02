import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../scss/Landingpage.scss";
import Firstpage from "../components/landing/Firstpage";
import Secondpage from "../components/landing/Secondpage";
import Thirdpage from "../components/landing/Thirdpage";

export default function Landing() {
  const arrowStyle = {
    position: "fixed",
    color: "white",
    border: "2px solid white",
    right: 20,
    bottom: 20,
    cursor: "pointer",
  };
  return (
    <>
      <ReactFullpage
        navigation
        navigationPosition="left"
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        scrollingSpeed={1000}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section firstPage">
                <Firstpage />
              </div>
              <div className="section secondPage">
                <Secondpage />
              </div>
              <div className="section thirdPage">
                <Thirdpage />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
