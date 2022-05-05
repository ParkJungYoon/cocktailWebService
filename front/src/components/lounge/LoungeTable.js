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
  Button,
  Snackbar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoungeItem from "./LoungeItem";
import LoungeTestItem from "./LoungeTestItem";

function LoungeTable({ user, setIsForm }) {
  const [list, setList] = useState([]);
  const [openItem, setOpenItem] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isListEdit, setIsListEdit] = useState(false);

  useEffect(async () => {
    const res = await Api.get("boardList");
    setList(res.data);
    console.log(res.data);
  }, [isOpen]);

  const handleListEdit = useCallback(() => {
    setIsListEdit((prev) => !prev);
  }, [isListEdit]);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const handleClickCreate = () => {
    if (!user) {
      alert("로그인 필요");
    } else {
      setIsForm((prev) => !prev);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        {isOpen ? (
          <LoungeItem handleOpen={handleOpen} user={user} item={openItem} />
        ) : (
          <>
            <TableHead>
              <button onClick={() => handleClickCreate()}>Create</button>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Comment</TableCell>
                <TableCell align="right">Date</TableCell>
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
