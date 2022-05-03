import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import LoungeItem from "./LoungeItem";

function LoungeTable({}) {
  const [list, setList] = useState([]);
  const [openItem, setOpenItem] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(async () => {
    const res = await Api.get("boardList");
    setList(res.data);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {isOpen ? (
          <LoungeItem setIsOpen={setIsOpen} item={openItem} />
        ) : (
          <>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item, i) => (
                <TableRow
                  key={i}
                  onClick={() => {
                    setOpenItem(item);
                    setIsOpen(true);
                  }}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell align="right">{item.title}</TableCell>
                  <TableCell align="right">{item.content}</TableCell>
                  <TableCell align="right">{item.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </TableContainer>
  );
}

export default LoungeTable;
