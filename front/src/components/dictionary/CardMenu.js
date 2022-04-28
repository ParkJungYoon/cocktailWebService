import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import * as Api from "../../api";
import AllCardList from "./AllCardList";
import Top10CardList from "./Top10CardList";
import CardSearch from "./CardSearch";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ee82ee",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CardMenu() {
  // 탭 기능
  const [cocktails, setCocktails] = useState([]);
  const [top10Cocktails, setTop10Cocktails] = useState([]);

  useEffect(async () => {
    await Api.get("cocktails").then((res) => {
      setCocktails(res.data);
    });
  }, []);

  useEffect(async () => {
    await Api.get("rank10").then((res) => {
      setTop10Cocktails(res.data);
    });
  }, []);
  // 디테일 기능
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // 필터기능
  const [searchCocktails, setSearchCocktails] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  //stlye
  const boxStyle = {
    bgcolor: "rgba(64, 64, 64, 0.9);",
    position: "fixed",
    display: "flex",
    width: "100px",
    p: 5,
    pr: 2,
    ml: 5,
    mt: 5,
  };
  const searchBoxStyle = {
    bgcolor: "rgba(64, 64, 64, 0.9);",
    position: "fixed",
    ml: 5,
    mt: 30,
  };
  const tabStyle = { color: "white" };

  // 탭 핸들링
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={2}>
          <Box sx={boxStyle} width="100px">
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
            >
              <Tab sx={tabStyle} value={1} label="all" />
              <Tab sx={tabStyle} value={2} label="top 10" />
            </Tabs>
          </Box>
          <Box sx={searchBoxStyle}>
            <CardSearch setSearchCocktails={setSearchCocktails} />
          </Box>
        </Grid>
        <Grid item xs>
          <TabPanel value={value} index={1}>
            <AllCardList
              cocktails={cocktails}
              searchCocktails={searchCocktails}
              isDetailOpen={isDetailOpen}
              setIsDetailOpen={setIsDetailOpen}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Top10CardList
              cocktails={cocktails}
              searchCocktails={searchCocktails}
              isDetailOpen={isDetailOpen}
              setIsDetailOpen={setIsDetailOpen}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
