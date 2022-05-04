import React, { useState } from "react";
import * as Api from "../../api";

function LoungeForm({ userState, board, setIsForm }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    img: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = makeForm();
    await Api.postForm("board", data).catch((err) => {
      console.log(err);
    });

    setIsForm(false);
  };
  const handleFileChange = (e) => {
    setForm({ ...form, img: e.target.files[0] });
  };
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
    <div>
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
    </div>
  );
}

export default LoungeForm;
