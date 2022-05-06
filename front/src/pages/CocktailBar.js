import React from "react";
import { Box } from "@mui/material";

import star1 from "../imgs/star1.jpg";
import "../scss/CocktailBar.scss";
import MenuBar from "../components/cocktailBar/MenuBar";

export default function Dictionary() {
  return (
    <Box
      container
      sx={{
        backgroundImage: `url(${star1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <MenuBar />
    </Box>
  );
}
