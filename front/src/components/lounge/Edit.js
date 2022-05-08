import React, { useContext, useState } from "react";
import { UserContext } from "../user/reducer/userReducer";
import { Button, TextField, Box, Container, styled } from "@mui/material";
import * as Api from "../../api";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});
function Edit({
  setIsEdit,
  boardId,
  commentId,
  prevComment,
  type,
  setTargetId,
}) {
  const { userState, userDispatch } = useContext(UserContext);

  const [form, setForm] = useState({
    content: [prevComment] ? [prevComment] : "",
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
          boardId: [boardId],
        });
      } else {
        const res = await Api.put(`board/comment/${commentId}`, {
          ...form,
        });
      }
      //setUser
      if (type === "edit") setTargetId(null);
      setIsEdit(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit}>
        <CssTextField
          required
          sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 3 }}
          label={"comment"}
          value={form.content}
          fullWidth
          onChange={(e) => {
            handleFormValue("content", e.target.value);
          }}
        />
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
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
            Submit
          </Button>
          <Button
            onClick={() => {
              if (type === "edit") setTargetId(null);
              setIsEdit(false);
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
            WithDraw
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Edit;
