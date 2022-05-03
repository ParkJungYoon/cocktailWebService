import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import * as Api from "../../api";

function LoungeItem({ setIsOpen, item }) {
  useEffect(async () => {
    const res = await Api.get(`board/${item._id}`);
    console.log(res.data);
  }, []);

  //   let binary = Buffer.from(item.images[0], "binary"); //or Buffer.from(data, 'binary')
  //   let imgData = new Blob(binary.buffer, { type: "application/octet-binary" });
  //   let link = URL.createObjectURL(imgData);

  return (
    <Paper>
      <img />
    </Paper>
  );
}

export default LoungeItem;
