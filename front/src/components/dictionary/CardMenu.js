import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

export default function CardMenu() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          flexGrow: 1,
          bgcolor: "rgba(64, 64, 64, 0.9);",
          display: "flex",
          py: 12,
        }}
        width="100px"
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab sx={{ color: "white" }} value={1} label="all" />
          <Tab sx={{ color: "white" }} value={2} label="top 10" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
