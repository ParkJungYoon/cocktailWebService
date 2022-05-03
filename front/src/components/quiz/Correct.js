import React from "react";
import "../../scss/Quiz.scss";

const Correct = (props) => {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <li
      className={props.correctAnswer === qAnswer ? "correct" : "incorrect"}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <>
      <ul className="correct">{answers}</ul>
    </>
  );
};

export default Correct;
