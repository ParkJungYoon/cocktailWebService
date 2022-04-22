import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Button, Box, Container } from "@mui/material";

import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";

// img 파일 불러오기
import cocktail from "../../img/firstpageMain.jpg";
import cocktails from "../../img/thirdpage.jpg";

const Fullpage = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                style={{
                  backgroundImage: `url(${cocktail})`,
                  backgroundSize: "cover",
                }}
              >
                <Firstpage />
              </div>
              <div className="section" style={{ backgroundColor: "#F1F7ED" }}>
                <Secondpage />
              </div>
              <div className="section" style={{ backgroundColor: "#F1F7ED" }}>
                <Thirdpage></Thirdpage>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};
export default Fullpage;
