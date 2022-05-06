import React, { useState, useEffect } from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import * as Api from "../../api.js";

import styles from "../../scss/Lounge.module.scss";
import { makeStyles } from "@material-ui/core/styles";

function LoungeRank({ setIsOpen }) {
  const [rankList, setRankList] = useState();
  useEffect(async () => {
    await Api.get("boardList")
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        res = res.sort((a, b) => {
          return b.comment.length - a.comment.length;
        });
        setRankList(res.slice(0, 5));
      });
  }, []);
  console.log(rankList);

  if (rankList) {
    return (
      <div className={styles["lounge-rank-background"]}>
        <Grid container>
          <Grid item>
            <Typography className={styles["white"]}>
              {rankList[0].title}
            </Typography>
            <LocalBarIcon className={styles["white"]} />
          </Grid>
          <Grid item>
            <Typography className={styles["white"]}>
              {rankList[1].title}
            </Typography>
            <LocalBarIcon className={styles["white"]} />
          </Grid>
          <Grid item>
            <Typography className={styles["white"]}>
              {rankList[2].title}
            </Typography>
            <LocalBarIcon className={styles["white"]} />
          </Grid>
          <Grid item>
            <Typography className={styles["white"]}>
              {rankList[3].title}
            </Typography>
            <LocalBarIcon className={styles["white"]} />
          </Grid>
          <Grid item>
            <Typography className={styles["white"]}>
              {rankList[4].title}
            </Typography>
            <LocalBarIcon className={styles["white"]} />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return null;
  }
}

export default LoungeRank;
