import React from "react";
import { Grid, Typography } from "@mui/material";

import styles from "../scss/Account.module.scss";
import Account from "../components/account/Account";

export default function AccountPage() {
  return (
    <div className={styles.account}>
      <Grid container>
        <Grid item xs={12} className={styles["account-background"]}>
          <Account />
        </Grid>
      </Grid>
    </div>
  );
}
