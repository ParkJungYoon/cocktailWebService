import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, Container } from "@mui/material";
import Edit from "./Edit";
import * as Api from "../../api";
import styles from "../../scss/Account.module.scss";

import { UserContext } from "../user/reducer/userReducer";

function AccountCard(props) {
  const { name, email, password } = props.props;
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [isNameEdit, setIsNameEdit] = useState(false);
  const navigate = useNavigate();
  const { userDispatch } = useContext(UserContext);

  const buttonStyle = {
    color: "white",
  };

  const userDelete = async (e) => {
    if (window.confirm("Are you sure?")) {
      await Api.delete("withdrawal")
        .then(() => {
          sessionStorage.removeItem("userToken");
          userDispatch({ type: "LOGOUT" });
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else return;
  };
  return (
    <Container className={styles["accountPageContainer"]}>
      <Grid container rowSpacing={3} sx={{ p: 15, pt: 3 }}>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <Typography variant="h4" align="center">
            Account
          </Typography>
        </Grid>

        {isNameEdit ? (
          <Grid item xs={12}>
            <Edit setIsEdit={setIsNameEdit} formName={"name"} />
          </Grid>
        ) : (
          <>
            <Grid item xs sx={{ mb: 2 }}>
              <Typography variant="h5">{name}</Typography>
            </Grid>
            <Grid item xs sx={{ textAlign: "right" }}>
              <Button
                onClick={() => {
                  setIsNameEdit(true);
                }}
                sx={buttonStyle}
              >
                Edit
              </Button>
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ borderBottom: "2px solid white" }}></Grid>
        {isEmailEdit ? (
          <Grid item xs={12}>
            <Edit setIsEdit={setIsEmailEdit} formName={"email"} />
          </Grid>
        ) : (
          <>
            <Grid item xs sx={{ mb: 2 }}>
              <Typography variant="h5">{email}</Typography>
            </Grid>
            <Grid item xs sx={{ textAlign: "right" }}>
              <Button
                sx={buttonStyle}
                onClick={() => {
                  setIsEmailEdit(true);
                }}
              >
                Edit
              </Button>
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ borderBottom: "2px solid white" }}></Grid>
        {isPasswordEdit ? (
          <Grid item xs={12}>
            <Edit setIsEdit={setIsPasswordEdit} formName={"password"} />
          </Grid>
        ) : (
          <>
            <Grid item xs sx={{ mb: 2 }}>
              <Typography variant="h5">password</Typography>
            </Grid>
            <Grid item xs sx={{ textAlign: "right" }}>
              <Button
                sx={buttonStyle}
                onClick={() => {
                  setIsPasswordEdit(true);
                }}
              >
                Edit
              </Button>
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ borderBottom: "2px solid white" }}></Grid>
        <Button
          sx={buttonStyle}
          onClick={() => {
            userDelete();
          }}
        >
          Delete
        </Button>
      </Grid>
    </Container>
  );
}

export default AccountCard;
