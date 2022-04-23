import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonFunc() {
  return (
    <Box
      sx={{
        // bgcolor: "#121212",
        p: 4,
        width: "500",
        height: "500",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={300}
        height={300}
        display="block"
      />
    </Box>
  );
}
