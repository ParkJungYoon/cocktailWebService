import React, { useCallback, useEffect, useState } from "react";
import { Paper } from "@mui/material";

import * as Api from "../../api";

function LoungeItem({ handleOpen, item, user }) {
  /* Item */
  const [link, setLink] = useState();
  // const [img, setImg] = useState();

  useEffect(async () => {
    await Api.get(`board/${item._id}`)
      .then((res) => {
        //image binary data to blob:url
        let Buffer = require("buffer/").Buffer;
        let binary = Buffer.from(res.data.data[0]); //or Buffer.from(data, 'binary')
        let imgData = new Blob(binary, { type: "application/octet-binary" });
        setLink(window.URL.createObjectURL(imgData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <p>
          IMG : <img src={link} />
        </p>
      </Paper>
    </>
  );
}

export default LoungeItem;
