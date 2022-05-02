import React, { useState } from "react";
import * as Api from "../../api";

function LoungeForm({ userState, board }) {
  //   const { name, __id } = userState;
  //   const { title, context, schema } = board;
  //   const [form, setForm] = useState({
  //     title: [title] ? [title] : "",
  //     context: [context] ? [context] : "",
  //     schema: [schema] ? [schema] : "", //filename-file //schema{%ref:dasdaafas}
  //   });
  const [form, setForm] = useState({
    title: "",
    context: "",
    schema: "",
  });

  const handleFormSubmit = async (e) => {
    e.preverntDefault();
    console.log(form);
    const data = makeForm();
    await Api.postForm("board", data)
      //확인용...
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFileChange = (e) => {
    const obj = { $ref: e.target.files[0] };
    setForm({ ...form, schema: obj });
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
    formData.append("context", form.context);
    formData.append("schema", form.schema);
    return formData;
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        Title :{" "}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleFormChange}
        />
        Context :{" "}
        <input
          type="text"
          name="context"
          value={form.context}
          onChange={handleFormChange}
        />
        File :{" "}
        <input
          type="file"
          name="schema"
          file={form.schema}
          value={form.schema["$ref"]}
          onChange={handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoungeForm;
