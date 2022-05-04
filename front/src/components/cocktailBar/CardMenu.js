import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Box, Grid } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AllCard from "./AllCard";
import Top10Card from "./Top10Card";
import FilteredCard from "./FilteredCard";
import CardSearch from "./CardSearch";
import Test from "./Test";
import Likes from "./Likes";
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

  // state
  const [value, setValue] = useState("0");
  const [search, setSearch] = useState(false);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  // tab handling
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
            <Tab
              sx={tabStyle}
              value={"0"}
              label="all"
              onClick={() => setSearch(false)}
            />
            <Tab sx={tabStyle} value={"1"} label="top 10" />
            <Tab sx={tabStyle} value={"2"} label="test" />
            <Tab sx={tabStyle} value={"3"} label="likes" />
          </TabList>
        </Box>
        <TabPanel value={"0"}>
          <Grid container sx={{ px: 15, mb: 3 }}>
            <Grid item xs={12}>
              <CardSearch
                search={search}
                setSearch={setSearch}
                setFilteredCocktails={setFilteredCocktails}
              />
            </Grid>
          </Grid>
          {!search ? (
            <Test />
          ) : (
            <FilteredCard filteredCocktails={filteredCocktails} />
          )}
        </TabPanel>
        <TabPanel value={"1"}>
          <Top10Card />
        </TabPanel>
        <TabPanel value={"2"}>
          <Test />
        </TabPanel>
        <TabPanel value={"3"}>
          <Likes />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
