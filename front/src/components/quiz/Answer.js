import React from "react";
import "../../scss/Quiz.scss";

const Answer = (props) => {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <li
      className={props.clickedAnswer === qAnswer ? "selectAnswer" : " "}
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <>
      <ul className="answers">{answers}</ul>
    </>
  );
};

export default Answer;
