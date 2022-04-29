import React from "react";
import { Grid } from "@mui/material";

import "../scss/Community.scss";
import Postings from "../components/community/Postings";
import Post from "../components/community/Post";

export default function Community() {
  return (
    <div className="community">
      <Grid container sx={{ mt: 25 }}>
        <Grid item xs={12}>
          <Postings />
        </Grid>
      </Grid>
    </div>
  );
}
