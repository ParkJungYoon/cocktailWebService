import React from "react";
<<<<<<< HEAD
import "./scss/Answer.scss";
=======
import "../../scss/Answer.scss";
>>>>>>> 6d6d25d949215e5786fbe7b9dc4255de21d3e72b

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
      <ul className="Answers">{answers}</ul>
    </>
  );
};

export default Answer;
