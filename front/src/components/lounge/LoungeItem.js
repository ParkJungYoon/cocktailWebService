import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import * as Api from "../../api";

function LoungeItem({ setIsOpen, item }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [link, setLink] = useState();

  useEffect(async () => {
    const res = await Api.get(`board/${item._id}`);
    const boardInfo = res.data.currentBoardInfo;
    setTitle(boardInfo.title);
    setContent(boardInfo.content);
    setCreatedAt(boardInfo.createdAt);
    // let Buffer = require("buffer/").Buffer;
    // let binary = Buffer.from(item.images[0]); //or Buffer.from(data, 'binary')
    // let imgData = new Blob(binary, { type: "application/octet-binary" });
    // setLink(window.URL.createObjectURL(imgData));
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(false);
          window.URL.revokeObjectURL(link);
        }}
      >
        goBack
      </button>
      <Paper>
        {/* <img src={link} alt="이미지" /> */}
        <p>{title}</p>
        <p>{content}</p>
        <p>{createdAt}</p>
      </Paper>
    </>
  );
}

export default LoungeItem;
