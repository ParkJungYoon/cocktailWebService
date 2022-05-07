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
  Button,
  Box,
  TablePagination,
  TableFooter,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoungeItem from "./LoungeItem";
import LoungeForm from "./LoungeForm";
import { useSnackbar } from "notistack";
//style

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "black",
  },
});

function LoungeTable({ user, setIsForm, setRankList }) {
  const [list, setList] = useState([]);
  const [openItem, setOpenItem] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isListEdit, setIsListEdit] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function TablePaginationActions(props) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return null;
  }
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
      enqueueSnackbar("Login Required");
    } else {
      setIsForm((prev) => !prev);
    }
  };

  return (
    <TableContainer
      sx={{
        color: "white",
        bgcolor: "rgba(64,64,64,0.5)",
        width: "70vw",
        mx: "auto",
        mb: 30,
        p: 5,
      }}
    >
      <Table size="small">
        {!isOpen ? (
          <>
            <TableHead>
              <Box sx={{ mb: 5 }}>
                <Button
                  onClick={() => handleClickCreate()}
                  sx={{
                    color: "white",
                    border: "2px solid white",
                    "&:hover": {
                      color: "black",
                      bgcolor: "white",
                      border: "2px solid black",
                    },
                  }}
                >
                  Create
                </Button>
              </Box>
              <TableRow
                sx={{
                  borderBottom: "2px solid white",
                  borderTop: "2px solid white",
                }}
              >
                <TableCell sx={{ color: "white" }}>No.</TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Title
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Name
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Comment
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Date
                </TableCell>
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
                    hover
                  >
                    <TableCell sx={{ color: "white" }}>{i + 1}</TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      {item.title}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      {item.writer ? item.writer.name : "X"}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      {item.comment.length}
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      {item.createdAt}
                    </TableCell>
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
        <TableFooter sx={{ color: "white" }}>
          <TableRow sx={{ color: "white" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={list.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              sx={{ color: "white" }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default LoungeTable;
