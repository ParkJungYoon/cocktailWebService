import React, { useEffect, useState, useCallback } from "react";
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

function LoungeTable({ user, setIsForm }) {
  const [list, setList] = useState([]);
  const [openItem, setOpenItem] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(async () => {
    const res = await Api.get("boardList");
    setList(res.data);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const handleClick = () => {
    if (!user) {
      alert("로그인 필요");
    } else {
      setIsForm((prev) => !prev);
    }
  };
  console.log(list);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {isOpen ? (
          <LoungeItem handleOpen={handleOpen} user={user} item={openItem} />
        ) : (
          <>
            <TableHead>
              <button onClick={() => handleClick()}>Create</button>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Comment</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">EditCheck</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item, i) => (
                <TableRow
                  key={i}
                  onClick={() => {
                    setOpenItem(item);
                    handleOpen();
                  }}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell align="right">
                    {item.writer ? item.writer.name : "X"}
                  </TableCell>
                  <TableCell align="right">{item.title}</TableCell>
                  <TableCell align="right">{item.comment.length}</TableCell>
                  <TableCell align="right">{item.createdAt}</TableCell>
                  <TableCell align="right">{}</TableCell>
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
