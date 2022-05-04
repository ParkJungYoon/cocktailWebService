import React, { useEffect, useState } from "react";
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

function LoungeItem({ setIsOpen, item }) {
  // const userState = useUserHook();
  // const [IsWriter, setIsWriter] = useState();

  //listItem
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [link, setLink] = useState();
  // const [img, setImg] = useState();

  //comment
  const [comments, setComments] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);

  useEffect(async () => {
    //fetch board Item
    const res = await Api.get(`board/${item._id}`).catch((err) => {
      console.log(err.response);
    });
    const boardInfo = res.data.currentBoardInfo;
    setTitle(boardInfo.title);
    setContent(boardInfo.content);
    setCreatedAt(boardInfo.createdAt);

    //comment
    setComments(res.data.currentBoardInfo.comment);

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
  }, [item]);
  //mock data
  const mockComments = [
    { name: "something", content: "somethingsomething" },
    { name: "something", content: "somethingsomething" },
    { name: "something", content: "somethingsomething" },
    { name: "something", content: "somethingsomething" },
    { name: "something", content: "somethingsomething" },
  ];

  console.log(comments);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(false);
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
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockComments.map((comment, i) => {
              // setIsWriter(writerCheck());
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell align="right"> {comment.content}</TableCell>
                  {/* <TableCell align="right">{comment.writer.name}</TableCell> */}
                  <TableCell align="right">
                    {/* {isEdit ? (
                      <Edit setIsEdit={setIsEdit} />
                    ) : (
                      <button></button>
                    )} */}
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
              setIsAdd(true);
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
