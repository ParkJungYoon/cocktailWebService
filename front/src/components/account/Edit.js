import React, { useContext, useState } from "react";
import { UserContext } from "../user/reducer/userReducer";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormHelperText,
  Grid,
} from "@mui/material";
import * as Api from "../../api";
import styles from "../../scss/Account.module.scss";

function Edit({ setIsEdit, formName }) {
  const { userState, userDispatch } = useContext(UserContext);

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
      //alert
      alert("변경완료");
      setIsEdit(false);
    } catch (err) {
      console.log(err);
      if (err.response) {
        alert(err.response.data);
      }
    }
  };

  return (
    <div
      style={{
        paddingTop: "5px",
        width: "100px",
        height: "100px",
        color: "white",
      }}
    >
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder={formName}
          value={form.formName}
          onChange={(e) => {
            handleFormValue([formName], e.target.value);
          }}
        /> */}
        <Grid contrainer>
          <Grid item>
            <TextField
              autoComplete="on"
              required
              margin="dense"
              label={form.formName}
              variant="filled"
              type="text"
              fullWidth
              color="secondary"
              value={form.formName}
              onChange={(e) => {
                handleFormValue([formName], e.target.value);
              }}
              className={styles["account - input"]}
            />
          </Grid>
          <Grid item>
            <Button type="submit" className={styles["account-button"]}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Button
        onClick={() => {
          setIsEdit(false);
        }}
        className={styles["account-button"]}
      >
        WithDraw
      </Button>
    </div>
  );
}

export default Edit;
