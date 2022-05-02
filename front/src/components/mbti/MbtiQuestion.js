import React from "react";

const MbtiQuestion = (props) => {
  const questions = Object.keys(props.question).map((qQuestion, i) => (
    <p key={qQuestion}>{props.question[qQuestion]}</p>
  ));
  return <p>{questions}</p>;
};

export default MbtiQuestion;
