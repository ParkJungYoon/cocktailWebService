import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import * as Api from "../../api";
import "../../scss/Dictionary.scss";
import CardList from "./CardList";
import CardMenu from "./CardMenu";

export default function Dictionary() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    Api.get("cocktails").then((res) => setCocktails(res.data));
  }, []);
  return (
    <>
      <div className="dictionary">
        <Grid container>
          <Grid item xs={12}>
            <Typography className="dictionaryTitle">Dictionary</Typography>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} color="white">
            <CardMenu></CardMenu>
          </Grid>
          <Grid item xs={8} color="white">
            <CardList cocktails={cocktails}></CardList>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
}
