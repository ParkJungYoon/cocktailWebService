import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import "../scss/Landingpage.scss";
import Firstpage from "../components/landing/Firstpage";
import Secondpage from "../components/landing/Secondpage";
import Thirdpage from "../components/landing/Thirdpage";
import Fourthpage from "../components/landing/Fourthpage";
export default function Landing() {
  return (
    <>
      <ReactFullpage
        navigation
        navigationPosition="left"
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        scrollingSpeed={1000}
        render={({}) => {
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
              <div className="section fourthPage">
                <Fourthpage />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
