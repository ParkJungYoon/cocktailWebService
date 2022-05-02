import React, { useState } from "react";
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

function AccountCard(props) {
  return (
    <div className={styles["cellar-card"]}>
      <p>AccountCard</p>
    </div>
  );
}

export default AccountCard;
