import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import star1 from "../../imgs/star1.jpg";
export default function SkeletonFunc() {
  return (
    <Box
      sx={{
        // bgcolor: "#121212",
        backgroundPosition: "center",
        height: "100vh",
        backgroundImage: `url(${star1})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
