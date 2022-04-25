import React, { Component } from "react";
import Question from "../question/Question";
import Answer from "../answer/Answer";
import "./QuizMain.css";
import QuestionImg from "../questionImg/QuestionImg";
import defaultImage from "../questionImg/defaultImage.jpg";
import StandardShaker from "../questionImg/StandardShaker.jpg";

export default class Quiz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: "술에 술을 섞거나 술에 청량음료나 과즙 음료, 기타 부재료를 이용하여 혼합시킨 것은?",
      2: "다음 기구의 이름은?",
      3: "다음 설명으로 틀린 것은?",
      4: "뜨거운 칵테일은 어떤 것인가?",
      5: "칵테일 용어 설명 중 틀린 것은?",
    },
    answers: {
      1: {
        1: "칵테일 ",
        2: "하드 드링크",
        3: "소프트 드링크",
      },
      2: {
        1: "스탠다드 셰이커(Standard Shaker)",
        2: "믹싱 글라스(Mixing Glass)",
        3: "스트레이너(Strainer)",
      },
      3: {
        1: "버진은 논 알코올이 칵테일이다.",
        2: "막테일은 논 알코올이 칵테일이다.",
        3: "체이서는 칵테일 가니쉬 중 하나이다.",
      },
      4: {
        1: "Pink Lady",
        2: "Irish Coffee",
        3: "Pina Colada",
      },
      5: {
        1: "Stir : 잘 섞이도록 저어 주는 것.",
        2: "Float : 한가지의 술에 다른 술이 혼합되지 않게 띄우는 것.",
        3: "Strainer : 과육을 제거하고 껍데기만을 짜 넣는다는 의미.",
        // Strainer → 믹싱글라스에 혼합한 술을 따를 때 얼음이 흘러나오지 않도록 걸러주기 위해 사용하는 도구.
      },
    },
    correctAnswers: {
      1: "1",
      2: "1",
      3: "3",
      4: "2",
      5: "3",
    },
    imgs: {
      1: defaultImage,
      2: StandardShaker,
      3: defaultImage,
      4: defaultImage,
      5: defaultImage,
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let {
      quiestions,
      imgs,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question question={quiestions[step]} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <QuestionImg img={imgs[step]} />
            </div>
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <button
              className="NextStep"
              disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(quiestions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
