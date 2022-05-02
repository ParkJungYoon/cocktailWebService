import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Box } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AllCard from "./AllCard";
import Top10Card from "./Top10Card";
import CardSearch from "./CardSearch";
import * as Api from "../../api";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

export default function CardMenu() {
  // 필터기능
  const navigate = useNavigate();
  const [value, setValue] = useState("0");

  // 탭 핸들링
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //stlye
  const boxStyle = {
    backgroundColor: "rgba(64, 64, 64, 0.5)",
    mx: "auto",
    mt: 5,
    py: 1,
    px: 2,
    width: "80%",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  };

  const tabStyle = { color: "white" };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={boxStyle}>
          <TabList onChange={handleChange}>
            <Tab sx={tabStyle} value={"0"} label="dictionary" />
            <Tab sx={tabStyle} value={"1"} label="top 10" />
            <Tab sx={tabStyle} value={"2"} label="Search" />
          </TabList>
        </Box>
        <TabPanel value={"0"}>
          <AllCard />
        </TabPanel>
        <TabPanel value={"1"}>
          <Top10Card />
        </TabPanel>
        <TabPanel value={"2"}>
          <CardSearch />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
