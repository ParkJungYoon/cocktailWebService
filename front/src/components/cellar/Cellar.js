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
import { UserContext } from "../user/reducer/userReducer";
import CellarLike from "./CellarLike";
import CellarRounge from "./CellarRounge";

function Cellar() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);
  console.log(userState.user);
  const isLogin = !!userState.user;
  if (isLogin === false)
    // navigate("/"); 왜안되지..?
    window.location.replace("/");

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Stack className="CellarContent">
        <Grid item xs={12} md={12} mt={13}>
          <Grid container>
            <Grid item xs={3} md={2}></Grid>
            <Grid item xs={8} md={8}>
              <CellarLike />
              <CellarRounge />
            </Grid>
            <Grid item xs={3} md={2}></Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Cellar;
