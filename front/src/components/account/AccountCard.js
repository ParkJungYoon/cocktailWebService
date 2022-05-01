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
import Edit from "./Edit";

function AccountCard(props) {
  const { name, email, password } = props.props;
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [isNameEdit, setIsNameEdit] = useState(false);

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
        {isNameEdit ? (
          <Edit setIsEdit={setIsNameEdit} formName={"name"} />
        ) : (
          <>
            <p>{name}</p>
            <button
              onClick={() => {
                setIsNameEdit(true);
              }}
            >
              Edit
            </button>
          </>
        )}
        {isEmailEdit ? (
          <Edit setIsEdit={setIsEmailEdit} formName={"email"} />
        ) : (
          <>
            <p>{email}</p>
            <button
              onClick={() => {
                setIsEmailEdit(true);
              }}
            >
              Edit
            </button>
          </>
        )}
        {isPasswordEdit ? (
          <Edit setIsEdit={setIsPasswordEdit} formName={"password"} />
        ) : (
          <>
            <p>password</p>
            <button
              onClick={() => {
                setIsPasswordEdit(true);
              }}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </Stack>
  );
}

export default AccountCard;
