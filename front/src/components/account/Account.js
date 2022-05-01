import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Box,
  Stack,
} from "@mui/material";
import bgImg from "../../imgs/thirdpage.jpg";
import { UserContext } from "../user/reducer/userReducer";
import AccountCard from "./AccountCard";
import EditForm from "./EditForm";

function Account() {
  //style
  const quizGridStyle = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
  };
  //code
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);
  const isLogin = !!userState.user;
  if (!isLogin) {
    navigate("/");
  }
  const { name, email, password } = userState.user;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Stack className="AccountContent">
        <Grid item xs={12} md={12} mt={13} height="720px" sx={quizGridStyle}>
          {isEdit ? (
            <EditForm props={{ setIsEdit, name, email, password }} />
          ) : (
            <AccountCard props={{ setIsEdit, name, email, password }} />
          )}
        </Grid>
      </Stack>
    </Box>
  );
}

export default Account;
