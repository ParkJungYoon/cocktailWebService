import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Box, Grid } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Top10Card from "./Top10Card";
import AllCard from "./AllCard";
import Likes from "./Likes";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0,0,0,0)",
    },
  },
});

export default function CardMenu() {
  // 필터기능
  const navigate = useNavigate();

  // state
  const [value, setValue] = useState("1");

  // tab handling
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //stlye
  const boxStyle = {
    backgroundColor: "rgba(64, 64, 64, 0.4)",
    mx: "auto",
    py: 1,
    px: 2,
    mt: 22,
    width: "70%",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={boxStyle}>
          <TabList
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
          >
            <Tab sx={{ color: "white" }} value={"1"} label="all" />
            <Tab sx={{ color: "white" }} value={"2"} label="top 10" />
            <Tab
              sx={{ color: "white", ml: "auto" }}
              value={"3"}
              label="my likes"
            />
          </TabList>
        </Box>
        <TabPanel value={"1"}>
          <AllCard />
        </TabPanel>
        <TabPanel value={"2"}>
          <Top10Card />
        </TabPanel>
        <TabPanel value={"3"}>
          <Likes />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
