import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  IconContainerProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";

import * as Api from "../../api";
import Edit from "./Edit";
import useUserHook from "../commons/useUserHook";
import { useSnackbar } from "notistack";

//style
import { Typography } from "@material-ui/core";

function LoungeItem({ handleOpen, item, user, handleListEdit }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  /* Item */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [link, setLink] = useState();
  // const [img, setImg] = useState();

  /* comment */
  const [comments, setComments] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const handleEdit = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, [isEdit]);

  useEffect(async () => {
    await Api.get(`board/${item._id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setCreatedAt(
          res.data.createdAt.split("T")[0] +
            " " +
            res.data.createdAt.split("T")[1].slice(0, 8)
        );
        //fetch image binary data
        if (res.data.data[0].data) {
          let Buffer = require("buffer/").Buffer;
          const type = res.data.data[0].type;
          let binary = Buffer.from(res.data.data[0].data);
          setLink(`data:${type};base64,${binary.toString("base64")}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(async () => {
    //fetch board Item
    await Api.get(`board/${item._id}`)
      .then((res) => {
        // fetch comment
        setComments(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isAdd, isEdit]);

  return (
    <>
      <Grid container sx={{ mb: 3 }}>
        <Grid item xs>
          <Button
            onClick={() => {
              handleOpen();
            }}
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
            Back
          </Button>
        </Grid>
        {!(item.writer?._id === user?._id) ? (
          <></>
        ) : (
          <Grid item xs sx={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                handleListEdit();
              }}
              sx={{
                mr: 1,
                color: "white",
                border: "2px solid white",
                "&:hover": {
                  color: "black",
                  bgcolor: "white",
                  border: "2px solid black",
                },
              }}
            >
              Edit
            </Button>
            <Button
              onClick={async () => {
                await Api.delete(`board/${item._id}`).catch((err) => {
                  console.log(err.response);
                  handleOpen();
                });
              }}
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
              delete
            </Button>
          </Grid>
        )}
      </Grid>
      <Box
        sx={{
          mb: 2,
          color: "white",
          bgcolor: "rgba(64,64,64,0.7)",
          mx: "auto",
          width: "90%",
        }}
      >
        <Grid
          container
          sx={{ borderBottom: "2px solid white", p: 2, alignItems: "center" }}
        >
          <Grid item xs>
            <Typography variant="h5">Title</Typography>
          </Grid>
          <Grid item xs>
            <Typography align="center" variant="h5">
              {title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography align="right" variant="body1">
              {createdAt}
            </Typography>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h5">
            IMG : <Box component="img" id="img" src={link} />
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Content : {content}</Typography>
        </Box>
        <Typography variant="h5">CreatedAt : {createdAt}</Typography>
      </Box>
      <TableContainer
        sx={{
          mb: 2,
          color: "white",
          bgcolor: "rgba(64,64,64,0.7)",

          mx: "auto",
          width: "90%",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments?.map((comment, i) => {
              return (
                <TableRow
                  key={i}
                  onClick={() => {
                    setTargetId(comment._id);
                  }}
                >
                  <TableCell align="right" sx={{ color: "white" }}>
                    {" "}
                    {comment.content}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {comment.writer?.name}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {!(comment.writer?._id === user?._id) ? (
                      <></>
                    ) : isEdit && comment._id === targetId ? (
                      <Edit
                        setIsEdit={handleEdit}
                        commentId={comment._id}
                        type={"edit"}
                        setTargetId={setTargetId}
                      />
                    ) : (
                      <>
                        <Button
                          onClick={(e) => {
                            handleEdit();
                          }}
                          sx={{ color: "white" }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={async () => {
                            await Api.delComment(
                              `board/comment/${comment._id}`,
                              item._id
                            ).catch((err) => {
                              console.log(err.response);
                            });
                            await Api.get(`board/${item._id}`).then((res) => {
                              setComments(res.data.comment);
                            });
                          }}
                          sx={{ color: "white" }}
                        >
                          delete
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {isAdd ? (
          <Edit boardId={item._id} setIsEdit={setIsAdd} type={"add"} />
        ) : (
          <Box sx={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                if (!user) {
                  enqueueSnackbar("Login Required");
                } else {
                  setIsAdd((prev) => !prev);
                }
              }}
              sx={{
                mt: 2,
                color: "white",
                border: "2px solid white",
                "&:hover": {
                  color: "black",
                  bgcolor: "white",
                  border: "2px solid black",
                },
              }}
            >
              댓글 작성
            </Button>
          </Box>
        )}
      </TableContainer>
    </>
  );
}

export default LoungeItem;
