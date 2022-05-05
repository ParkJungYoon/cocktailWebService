import React, { useContext, useState } from "react";
import { UserContext } from "../user/reducer/userReducer";
import { Button, TextField, Box, Container } from "@mui/material";
import * as Api from "../../api";

function Edit({ setIsEdit, boardId, prevComment, type }) {
  const { userState, userDispatch } = useContext(UserContext);

  const [form, setForm] = useState({
    content: [prevComment] ? [prevComment] : "",
    boardId: [boardId],
  });

  const handleFormValue = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === "add") {
        const res = await Api.post("board/comment", {
          ...form,
        });
      } else {
        const res = await Api.put(`board/comment/${boardId}`, {
          ...form,
        });
      }
      //setUser
      setIsEdit(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          sx={{
            bgcolor: "white",
            color: "white",
          }}
          label={"comment"}
          variant="filled"
          color="secondary"
          value={form.content}
          fullWidth
          onChange={(e) => {
            handleFormValue("content", e.target.value);
          }}
        />
        <Button type="submit" sx={{ ml: "auto", color: "Black" }}>
          Submit
        </Button>
        <Button
          onClick={() => {
            setIsEdit(false);
          }}
          sx={{ color: "Black" }}
        >
          WithDraw
        </Button>
      </form>
    </Box>
  );
}

export default Edit;
