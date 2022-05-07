import React, { useState, useContext, useEffect } from "react";
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
  const [boardCount, setBoardCount] = useState();
  const [commentCount, setCommentCount] = useState();
  const [likeCount, setLikeCount] = useState();

  useEffect(async () => {
    await Api.get("user/count")
      .then((res) => {
        setBoardCount(res.data.boardCount);
        setCommentCount(res.data.commentCount);
        setLikeCount(res.data.likeCount);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });

  const buttonStyle = {
    color: "white",
  };
  console.log(likeCount, boardCount, commentCount);

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
      <Grid container rowSpacing={2} sx={{ p: 10, pt: 3, mb: 10 }}>
        <Grid item xs={12} sx={{ mb: 3 }}>
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
        <>
          <Grid item xs sx={{ mb: 2, tesxAlign: "center" }}>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Like
            </Typography>
            <p style={{ textAlign: "center" }}>{likeCount}</p>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Typography variant="h5">Lounge Board</Typography>
            <p style={{ textAlign: "center" }}>{boardCount}</p>
          </Grid>
          <Grid item xs sx={{ textAlign: "right" }}>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Comments
            </Typography>
            <p style={{ textAlign: "center" }}>{commentCount}</p>
          </Grid>
        </>
        <Grid item xs={12} sx={{ borderBottom: "2px solid white" }}></Grid>
        <Button
          sx={buttonStyle}
          onClick={() => {
            userDelete();
          }}
        >
          Withdrawal (회원탈퇴)
        </Button>
      </Grid>
    </Container>
  );
}

export default AccountCard;
