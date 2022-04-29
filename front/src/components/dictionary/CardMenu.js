import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Box } from "@mui/material";
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
  const [top10Cocktails, setTop10Cocktails] = useState([]);

  useEffect(async () => {
    await Api.get("cocktails").then((res) => {
      setCocktails(res.data);
      setTop10Cocktails(
        res.data
          .filter((data) => data.rank != undefined && data.rank.rank <= 10)
          .sort((A, B) => {
            return A.rank.rank < B.rank.rank
              ? -1
              : A.rank.rank > B.rank.rank
              ? 1
              : 0;
          })
      );
    });
  }, []);

  // 필터기능
  const [searchCocktails, setSearchCocktails] = useState([]);
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
            <Tab sx={tabStyle} value={"2"} label="likes" />
            <CardSearch setSearchCocktails={setSearchCocktails} />
          </TabList>
        </Box>

        <TabPanel value={"0"}>
          <AllCardList
            cocktails={cocktails}
            setCocktails={setCocktails}
            searchCocktails={searchCocktails}
          />
        </TabPanel>
        <TabPanel value={"1"}>
          <Top10CardList
            top10Cocktails={top10Cocktails}
            setTop10Cocktails={setTop10Cocktails}
          />
        </TabPanel>
        <TabPanel value={"2"}>
          <Box sx={{ color: "white", ml: 20 }}>준비중입니다</Box>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
