import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import CellarLike from "./CellarLike";
import CellarLounge from "./CellarLounge";
import useUserHook from "../commons/useUserHook";

function Cellar() {
  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Stack className="CellarContent">
        <Grid item xs={12} md={12} mt={13}>
          <Grid container>
            <Grid item xs={3} md={2}></Grid>
            <Grid item xs={8} md={8}>
              <CellarLike />
              <CellarLounge />
            </Grid>
            <Grid item xs={3} md={2}></Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Cellar;
