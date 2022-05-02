import React, { useState } from "react";
import { Grid, Typography, Button, Container } from "@mui/material";
import Edit from "./Edit";
import styles from "../../scss/Account.module.scss";

function AccountCard(props) {
  const { name, email, password } = props.props;
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [isNameEdit, setIsNameEdit] = useState(false);

  const buttonStyle = {
    color: "white",
  };
  return (
    <Container className={styles["accountPageContainer"]}>
      <Grid container rowSpacing={3} sx={{ p: 15, pt: 3 }}>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <Typography variant="h4" align="center">
            AccountCard
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
      </Grid>
    </Container>
  );
}

export default AccountCard;
