import React from "react";
import "../../scss/Quiz.scss";

const OxTable = (props) => {
  const setStep = props.setStep;
  const setDisable = props.setDisable;
  let splitChar = props.ox.split("");
  let lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="oxTable">
      <table>
        <td className="outlineStyle">
          <tr>
            <td>NO.</td>
            {lst.map((i) => (
              <td
                className="Number"
                key={i}
                onClick={() => {
                  setStep(i + 1);
                  setDisable(true);
                }}
              >
                Q{i + 1}.
              </td>
            ))}
          </tr>
          <tr>
            <td>O/X</td>
            {lst.map((i) => (
              <td>{splitChar[i]}</td>
            ))}
          </tr>
        </td>
      </table>
    </div>
  );
};

export default OxTable;
