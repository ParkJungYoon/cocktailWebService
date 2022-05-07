import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// import words from "./words";
import * as Api from "../../api";

const options = {
  colors: ["#ffffff"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
};
const renameKeys = (mapping, objArr) => {
  const renamedObjArr = [];
  for (let obj of objArr) {
    const renamedObj = {};
    for (let [before, after] of Object.entries(mapping)) {
      if (obj[before]) {
        renamedObj[after] = obj[before];
      }
    }
    renamedObjArr.push(renamedObj);
  }
  return renamedObjArr;
};

function WordCloud() {
  const [Obj, setObj] = useState([]);
  useEffect(async () => {
    const res = await Api.get("cocktails/like");
    setObj(renameKeys({ name: "text", likes: "value" }, res.data));
  }, []);

  return (
    <div>
      <Resizable
        defaultSize={{
          width: 600,
          height: 300,
        }}
        style={resizeStyle}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud options={options} words={Obj} />
        </div>
      </Resizable>
    </div>
  );
}

export default WordCloud;
