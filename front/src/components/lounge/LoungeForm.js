import React, { useState } from "react";
import { Paper } from "@mui/material";
import * as Api from "../../api";

function LoungeForm({ userState, item, setIsForm, type }) {
  const [form, setForm] = useState({
    title: [item?.title] ? [item?.title] : "",
    content: [item?.content] ? [item?.content] : "",
    img: "",
  });

  //submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = makeForm();
    if (type === "add") {
      await Api.postForm("board", data).catch((err) => {
        console.log(err);
      });
      setIsForm(false);
    } else {
      await Api.putForm(`board/${item._id}`, data).catch((err) => {
        console.log(err.response);
      });
      setIsForm();
    }
  };
  //file change
  const handleFileChange = (e) => {
    setForm({ ...form, img: e.target.files[0] });
  };
  //form change
  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const makeForm = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    formData.append("img", form.img);
    return formData;
  };

  return (
    <Paper>
      <form onSubmit={handleFormSubmit} enctype="multipart/form-data">
        Title :{" "}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleFormChange}
        />
        Content :{" "}
        <input
          type="text"
          name="content"
          value={form.content}
          onChange={handleFormChange}
        />
        File :{" "}
        <input
          type="file"
          name="img"
          file={form.img}
          onChange={handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() => {
          setIsForm(false);
        }}
      >
        withdraw
      </button>
    </Paper>
  );
}

export default LoungeForm;
