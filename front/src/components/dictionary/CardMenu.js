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

  useEffect(async () => {
    await Api.get("cocktails").then((res) => {
      setCocktails(res.data);
    });
  }, []);

  // 필터기능
  const [searchCocktails, setSearchCocktails] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  //stlye
  const boxStyle = {
    bgcolor: "rgba(64, 64, 64, 0.9);",
    position: "fixed",
    display: "flex",
    py: 2,
    px: 1,
    ml: 5,
    mt: 3,
  };

  const tabStyle = { color: "white" };

  // 탭 핸들링
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs>
          <Box sx={boxStyle}>
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
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <TabPanel value={value} index={1}>
              <AllCardList
                cocktails={cocktails}
                searchCocktails={searchCocktails}
                setSearchCocktails={setSearchCocktails}
              />
            </TabPanel>
          </Grid>
          <TabPanel value={value} index={2}>
            <Top10CardList cocktails={cocktails} />
          </TabPanel>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
