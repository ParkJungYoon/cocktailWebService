import React from "react";
import "../../scss/Mbti.scss";

const MbtiQuestion = (props) => {
  const questions = Object.keys(props.question).map((qQuestion, i) => (
    <p key={qQuestion}>{props.question[qQuestion]}</p>
  ));
  return <p>{questions}</p>;
};

export default MbtiQuestion;
