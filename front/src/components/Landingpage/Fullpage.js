import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Button, Box } from "@mui/material";

import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";

// img 파일 불러오기
import cocktail from "../../img/main_cocktail.jpg";
import top10 from "../../img/cocktail_top10.png";

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
                  opacity: "0.9",
                }}
              >
                <Firstpage />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
                      fullpageApi.moveSectionDown();
                    }}
                    color="success"
                    sx={{ my: 4 }}
                  >
                    밑에 더 있지~~~ ⬇⬇⬇⬇
                  </Button>
                </Box>
              </div>
              <div className="section" style={{ backgroundColor: "#272727" }}>
                <Secondpage />
              </div>
              <div className="section" style={{ backgroundColor: "#272727" }}>
                <Thirdpage></Thirdpage>
              </div>
              <div className="section" style={{ backgroundColor: "#272727" }}>
                <div style={{ color: "white" }}>여긴 뭐 만들까~~~~</div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};
export default Fullpage;
