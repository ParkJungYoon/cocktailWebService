import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Tab, Box, Grid, Container } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import * as Api from "../../api";
import AllCardList from "./AllCardList";
import Top10CardList from "./Top10CardList";
import CardSearch from "./CardSearch";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

export default function CardMenu() {
  // 탭 기능
  const [cocktails, setCocktails] = useState([]);

  useEffect(async () => {
    await Api.get("cocktails").then((res) => {
      setCocktails(res.data);
    });
  }, []);

  // 필터기능
  const [searchCocktails, setSearchCocktails] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  // 탭 핸들링
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //stlye
  const boxStyle = {
    backgroundColor: "rgba(64, 64, 64, 0.5)",
    mx: "auto",
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
            <Tab sx={tabStyle} value={1} label="dictionary" />
            <Tab sx={tabStyle} value={3} label="top 10" />
            <CardSearch setSearchCocktails={setSearchCocktails} />
          </TabList>
        </Box>

        <TabPanel value={1}>
          <AllCardList
            cocktails={cocktails}
            searchCocktails={searchCocktails}
          />
        </TabPanel>
        <TabPanel value={3}>
          <Top10CardList cocktails={cocktails} />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
