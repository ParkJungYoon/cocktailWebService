import React from "react";
import "./Split.css";

const Split = (props) => {
  let splitChar = props.ox.split("");

  return (
    <>
      <table>
        <td className="aaa">
          <tr>
            <td>NO.</td>
            <td>Q1.</td>
            <td>Q2.</td>
            <td>Q3.</td>
            <td>Q4.</td>
            <td>Q5.</td>
            <td>Q6.</td>
            <td>Q7.</td>
            <td>Q8.</td>
            <td>Q9.</td>
            <td>Q10.</td>
          </tr>
          <tr>
            <td>O/X</td>
            <td>{splitChar[0]}</td>
            <td>{splitChar[1]}</td>
            <td>{splitChar[2]}</td>
            <td>{splitChar[3]}</td>
            <td>{splitChar[4]}</td>
            <td>{splitChar[5]}</td>
            <td>{splitChar[6]}</td>
            <td>{splitChar[7]}</td>
            <td>{splitChar[8]}</td>
            <td>{splitChar[9]}</td>
          </tr>
        </td>
      </table>
    </>
  );
};

export default Split;
