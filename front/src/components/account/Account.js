import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

import { UserContext } from "../user/reducer/userReducer";
import AccountCard from "./AccountCard";
import EditForm from "./EditForm";
import styles from "../../scss/Account.module.scss";
function Account() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);
  // console.log(userState.user);
  const isLogin = !!userState.user;
  if (isLogin === false)
    // navigate("/"); 왜안되지..? //임시...
    window.location.replace("/");
  const { name, email, password } = userState.user;

  return (
    <Container>
      <AccountCard props={{ name, email, password }} />
    </Container>
  );
}

export default Account;
