import React from "react";
import "../../scss/Quiz.scss";
import { Box } from "@mui/material";
const OxTable = ({ setStep, setDisable, ox }) => {
  let splitChar = ox.split("");
  let lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="oxTable">
      <Box component="table">
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
      </Box>
    </div>
  );
};

export default OxTable;
