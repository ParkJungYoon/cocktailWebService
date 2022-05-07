import React, { useContext, useState } from "react";
import { UserContext } from "../user/reducer/userReducer";
import { Button, TextField, Box, Container } from "@mui/material";
import { useSnackbar } from "notistack";
import * as Api from "../../api";

function Edit({ setIsEdit, formName }) {
  const { userState, userDispatch } = useContext(UserContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [form, setForm] = useState({
    [formName]: userState.user[formName] ? userState.user[formName] : "",
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
      const res = await Api.put("login/modify", {
        ...form,
      });
      //setUser
      const updatedUser = res.data;
      userDispatch({
        type: "Edit",
        payload: updatedUser,
      });
      enqueueSnackbar("Modifications completed");
      setIsEdit(false);
    } catch (err) {
      console.log(err);
      if (err.response) {
        enqueueSnackbar(`${err.response.data}`);
      }
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
          label={formName}
          variant="filled"
          color="secondary"
          value={form.formName}
          fullWidth
          onChange={(e) => {
            handleFormValue([formName], e.target.value);
          }}
        />
        <Box textAlign={"right"}>
          <Button type="submit" sx={{ ml: "auto", color: "white" }}>
            Submit
          </Button>
          <Button
            onClick={() => {
              setIsEdit(false);
            }}
            sx={{ color: "white" }}
          >
            WithDraw
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Edit;
