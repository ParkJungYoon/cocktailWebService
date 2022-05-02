import React from "react";
import { Grid, Typography } from "@mui/material";

import styles from "../scss/Cellar.module.scss";
import Cellar from "../components/cellar/Cellar";

export default function CellarPage() {
  return (
    <div className={styles.cellar}>
      <Grid container>
        <Grid item xs={12} className={styles["cellar-background"]}>
          <Cellar />
        </Grid>
      </Grid>
    </div>
  );
}
