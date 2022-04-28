import React from "react";
import "./scss/OxTable.scss";

const OxTable = (props) => {
  let splitChar = props.ox.split("");
  let lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <table>
        <td className="OutlineStyle">
          <tr>
            <td>NO.</td>
            {lst.map((i) => (
              <td>Q.{i + 1}</td>
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
    </>
  );
};

export default OxTable;
