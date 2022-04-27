import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "rgba(64, 64, 64, 0.9);",
        display: "flex",
        py: 12,
      }}
      width="100px"
    >
      <Tabs
        textColor="white"
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="all" />
        <Tab label="top 10" />
        <Tab label="steady" />
      </Tabs>
    </Box>
  );
}
