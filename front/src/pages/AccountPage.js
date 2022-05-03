import React from "react";
import { Grid } from "@mui/material";
import styles from "../scss/Account.module.scss";
import Account from "../components/account/Account";

export default function AccountPage() {
  return (
    <div className={styles["accountPage"]}>
      <Grid container sx={{ mt: 40 }}>
        <Grid item xs={12}>
          <Account />
        </Grid>
      </Grid>
    </div>
  );
}
