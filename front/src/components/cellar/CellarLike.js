import React, { useEffect } from "react";
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
import { height } from "@mui/system";
import styles from "../../scss/Cellar.module.scss";
import * as Api from "../../api";
import useUserHook from "../commons/useUserHook";

function CellarLike(props) {
  const userState = useUserHook();
  if (userState === false)
    // navigate("/"); 왜안될까..?
    window.location.replace("/"); //임시...
  useEffect(async () => {
    await Api.get("userLike").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className={styles["cellar-card"]}>
      <p>CellarLike</p>
    </div>
  );
}

export default CellarLike;
