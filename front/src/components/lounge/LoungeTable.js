import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import LoungeForm from "./LoungeForm";
//style
import styles from "../../scss/Lounge.module.scss";

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "black",
  },
});

function LoungeTable({ user, setIsForm, setRankList }) {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [openItem, setOpenItem] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isListEdit, setIsListEdit] = useState(false);

  useEffect(async () => {
    await Api.get("boardList")
      .then((res) => {
        setList(res.data);
        return list;
      })
      .then((res) => {
        res = res.sort((a, b) => {
          return b.comment.length - a.comment.length;
        });
        setRankList(res.slice(0, 5));
      });
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
    <TableContainer component={Paper} className={styles["table"]}>
      <Table size="small">
        {!isOpen ? (
          <>
            <TableHead>
              <Button
                onClick={() => handleClickCreate()}
                sx={{ color: "white" }}
              >
                Create
              </Button>
              <TableRow className={styles["table-row"]}>
                <TableCell>No</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Comment</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list
                .slice(0)
                .reverse()
                .map((item, i) => (
                  <TableRow
                    key={i}
                    onClick={() => {
                      setOpenItem(item);
                      handleOpen();
                    }}
                  >
                    <TableCell>{i + 1}</TableCell>
                    <TableCell align="right">{item.title}</TableCell>
                    <TableCell align="right">
                      {item.writer ? item.writer.name : "X"}
                    </TableCell>
                    <TableCell align="right">{item.comment.length}</TableCell>
                    <TableCell align="right">{item.createdAt}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </>
        ) : isListEdit ? (
          <LoungeForm item={openItem} setIsForm={handleListEdit}></LoungeForm>
        ) : (
          <LoungeItem
            handleOpen={handleOpen}
            user={user}
            item={openItem}
            handleListEdit={handleListEdit}
          />
        )}
      </Table>
    </TableContainer>
  );
}

export default LoungeTable;
