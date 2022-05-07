import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Box } from "@mui/material";
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
              <Box className="section firstPage">
                <Firstpage />
              </Box>
              <Box className="section secondPage">
                <Secondpage />
              </Box>
              <Box className="section thirdPage">
                <Thirdpage />
              </Box>
              <Box className="section fourthPage">
                <Fourthpage />
              </Box>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
