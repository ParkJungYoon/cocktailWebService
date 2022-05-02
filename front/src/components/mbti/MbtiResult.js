import React, { useState } from "react";
import "../../scss/Mbti.scss";

const MbtiResult = (props) => {
  const [co, setCo] = useState("");
  const countEI = props.countEI;
  const countSN = props.countSN;
  const countTF = props.countTF;
  const countJP = props.countJP;

  if (countEI > 2) {
    setCo(co + "E");
  } else setCo(co + "I");

  if (countSN > 2) {
    setCo(co + "S");
  } else setCo(co + "N");

  if (countTF > 2) {
    setCo(co + "T");
  } else setCo(co + "F");

  if (countJP > 2) {
    setCo(co + "J");
  } else setCo(co + "P");
  //   <p {...MbtiResult(countEI, countSN, countTF, countJP)}></p>;
  return <p>{co}</p>;
};

export default MbtiResult;
