import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Firstpage from "./Firstpage";
import cocktail from "../../img/main_cocktail.jpg";
import top10 from "../../img/cocktail_top10.png";

const Fullpage = () => (
  <>
    <ReactFullpage
      //fullpage options
      scrollingSpeed={500} /* Options here */
      render={({ state, fullpageApi }) => {
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
            </div>
            <div className="section">
              {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                다음
              </button> */}
              <img src={top10} alt="" width={"100%"} />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);
export default Fullpage;
