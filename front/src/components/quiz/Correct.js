import React from "react";
<<<<<<< HEAD
import "./scss/Correct.scss";
=======
import "../../scss/Correct.scss";
>>>>>>> 6d6d25d949215e5786fbe7b9dc4255de21d3e72b

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
      <ul className="Correct">{answers}</ul>
    </>
  );
};

export default Correct;
