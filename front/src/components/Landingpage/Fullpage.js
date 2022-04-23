import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "../../scss/Landingpage.scss";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import video from "../../video/cocktail.mp4";
// img 파일 불러오기

const Fullpage = () => {
  return (
    <>
      <ReactFullpage
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
};
export default Fullpage;
