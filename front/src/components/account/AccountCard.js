import React from "react";
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

function AccountCard(props) {
  const { name, email, setIsEdit } = props.props;
  //   const name = props.name;
  //   const email = props.email;

  return (
    <Stack
      sx={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ))`,
        width: "50%",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          paddingTop: "100px",
          width: "500px",
          height: "500px",
          color: "white",
        }}
      >
        <p>AccountCard</p>
        <p>{name}</p>
        <p>{email}</p>
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
      </div>
    </Stack>
  );
}

export default AccountCard;
