import React from "react";
import { Grid, Typography } from "@mui/material";

import styles from "../scss/Lounge.module.scss";
import Lounge from "../components/lounge/Lounge";

export default function LoungePage() {
  return (
    <div className={styles.lounge}>
      <Grid container>
        <Grid item xs={12}>
          <Lounge />
        </Grid>
      </Grid>
    </div>
  );
}
