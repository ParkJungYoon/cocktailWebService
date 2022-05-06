import React, { useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import star1 from "../imgs/star1.jpg";
import IntroductionMenu from "../components/introduction/IntroductionMenu";

export default function Introduction() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${star1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <IntroductionMenu />
    </Box>
  );
}
