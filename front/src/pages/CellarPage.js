import React from "react";
import { Grid, Typography } from "@mui/material";

import styles from "../scss/Account.module.scss";
import Cellar from "../components/cellar/Cellar";

export default function CellarPage() {
  return (
    <div className={styles.account}>
      <Grid container sx={{ mt: 25 }}>
        <Grid item xs={12}>
          <Cellar />
        </Grid>
      </Grid>
    </div>
  );
}
