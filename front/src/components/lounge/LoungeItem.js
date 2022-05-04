import React, { useCallback, useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { colorChannel } from "@mui/material/node_modules/@mui/system";

import * as Api from "../../api";
import Edit from "./Edit";
import useUserHook from "../commons/useUserHook";

//로그 아웃 상태 : userState===false
//로그 인 상태 :  //userState.email,userState.name,userState.__id로 사용 가능합니다

// const writerCheck = () => {
//   return true;
// };

function LoungeItem({ handleOpen, item, user }) {
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

  const handleEdit = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, [isEdit]);

  useEffect(async () => {
    await Api.get(`board/${item._id}`)
      .then((res) => {
        setTitle(res.data.currentBoardInfo.title);
        setContent(res.data.currentBoardInfo.content);
        setCreatedAt(res.data.currentBoardInfo.createdAt);

        //fetch image
        // await Api.get("images", boardInfo.images[0]).then((res) => {
        //   let reader = new FileReader();
        //   let file = res.data;
        //   reader.onloadend = () => {
        //     setImg({ file: file, previewURL: reader.result });
        //   };
        //   reader.readAsDataURL(file);
        // });
        // let Buffer = require("buffer/").Buffer;
        // let binary = Buffer.from(res.data.getImage[0].data); //or Buffer.from(data, 'binary')
        // let imgData = new Blob(binary, { type: "application/octet-binary" });
        // setLink(window.URL.createObjectURL(imgData));
        // console.log(link);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(async () => {
    //fetch board Item
    await Api.get(`board/${item._id}`)
      .then((res) => {
        // fetch comment
        setComments(res.data.currentBoardInfo.comment);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [isAdd]);
  //mock data
  // const mockComments = [
  //   { writer: { name: "name1" }, content: "somethingsomething1" },
  //   { writer: { name: "name2" }, content: "somethingsomething2" },
  //   { writer: { name: "name3" }, content: "somethingsomething3" },
  //   { writer: { name: "name4" }, content: "somethingsomething4" },
  //   { writer: { name: "name5" }, content: "somethingsomething5" },
  // ];
  console.log(comments);

  return (
    <>
      <button
        onClick={() => {
          handleOpen();
        }}
      >
        goBack
      </button>
      <Paper>
        {/* <img src={link} alt="이미지" /> */}
        <p>Title : {title}</p>
        {/* <p>IMG : <img src={img.previewURL} /></p> */}
        <p>Content : {content}</p>
        <p>CreatedAt : {createdAt}</p>
      </Paper>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Comment</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">edit check</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments?.map((comment, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell align="right"> {comment.content}</TableCell>
                  <TableCell align="right">{comment.writer.name}</TableCell>
                  <TableCell align="right">
                    {!(comment.writer?._id === user?._id) ? (
                      <></>
                    ) : isEdit ? (
                      <Edit setIsEdit={handleEdit} />
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            handleEdit();
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={async () => {
                            await Api.delete(
                              "board/comment",
                              comment._id
                            ).catch((err) => {
                              console.log(err.response);
                            });
                            await Api.get(`board/${item._id}`).then((res) => {
                              setComments(res.data.currentBoardInfo.comment);
                            });
                          }}
                        >
                          delete
                        </button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {isAdd ? (
          <Edit boardId={item._id} setIsEdit={setIsAdd} />
        ) : (
          <button
            onClick={() => {
              if (!user) {
                alert("로그인 필요");
              } else {
                setIsAdd((prev) => !prev);
              }
            }}
          >
            댓글 작성
          </button>
        )}
      </TableContainer>
    </>
  );
}

export default LoungeItem;
