import React from "react";
import "../../scss/Quiz.scss";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
const OxTable = ({ setStep, setDisable, ox }) => {
  let splitChar = ox.split("");
  let lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <TableContainer sx={{ mt: 3, width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              component="th"
              sx={{ color: "white", border: "2px solid white" }}
            >
              NO.
            </TableCell>
            {lst.map((i) => (
              <TableCell
                component="th"
                sx={{
                  color: "white",
                  border: "2px solid white",
                  cursor: "pointer",
                  "&:hover": { color: "#ff3897" },
                }}
                key={i}
                onClick={() => {
                  setStep(i + 1);
                  setDisable(true);
                }}
                align="center"
              >
                Q{i + 1}
              </TableCell>
            ))}
          </TableRow>

          <TableRow sx={{ color: "white" }}>
            <TableCell sx={{ color: "white", border: "2px solid white" }}>
              O/X
            </TableCell>
            {lst.map((i) => (
              <TableCell
                key={i}
                sx={{ color: "white", border: "2px solid white" }}
                align="center"
              >
                {splitChar[i]}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default OxTable;
