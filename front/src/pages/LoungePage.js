import React from "react";
import { Box, Typography } from "@mui/material";

import Lounge from "../components/lounge/Lounge";
import star1 from "../imgs/star1.jpg";

export default function LoungePage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${star1})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(64, 64, 64, 0.7)",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Lounge />
    </Box>
  );
}
