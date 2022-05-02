import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";

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

function WordCloud() {
  useEffect(async () => {
    const res = await Api.get("cocktails/like");
    console.log(res.data);
  }, []);

  const words = [
    {
      name: "told",
      likes: 64,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {},
    {
      text: "best",
      value: 54,
    },
    {
      text: "mouth",
      value: 20,
    },
    {
      name: "staff",
      value: 64,
    },
    {
      text: "gum",
      value: 10,
    },
    {
      text: "chair",
      value: 12,
    },
    {
      text: "ray",
      value: 22,
    },
    {
      text: "dentistry",
      value: 11,
    },
    {
      text: "canal",
      value: 13,
    },
    {
      text: "procedure",
      value: 32,
    },
    {
      text: "filling",
      value: 26,
    },
    {
      text: "gentle",
      value: 19,
    },
    {
      text: "cavity",
      value: 17,
    },
    {
      text: "crown",
      value: 14,
    },
    {
      text: "cleaning",
      value: 38,
    },
    {
      text: "hygienist",
      value: 24,
    },
    {
      text: "dental",
      value: 59,
    },
    {
      text: "charge",
      value: 24,
    },
    {
      text: "cost",
      value: 29,
    },
    {
      text: "charged",
      value: 13,
    },
    {
      text: "spent",
      value: 17,
    },
    {
      text: "paying",
      value: 14,
    },
    {
      text: "pocket",
      value: 12,
    },
    {
      text: "dollar",
      value: 11,
    },
    {
      text: "business",
      value: 32,
    },
    {
      text: "refund",
      value: 10,
    },
  ];
  return (
    <div>
      <div style={{ height: 400, width: 600 }}>
        <ReactWordcloud options={options} words={words} />
      </div>
    </div>
  );
}

export default WordCloud;
