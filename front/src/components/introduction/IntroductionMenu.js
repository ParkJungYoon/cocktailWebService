import React from "react";
import { Box, Tab, ThemeProvider, createTheme, styled } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import ProjectIdea from "./ProjectIdea";
import TeamIntro from "./TeamIntro";

function IntroductionMenu() {
  const [value, setValue] = React.useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(0,0,0,0)",
      },
    },
  });
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
    <>
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <Box sx={boxStyle}>
            <TabList
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
            >
              <Tab sx={{ color: "white" }} value={"0"} label="기획의도" />
              <Tab sx={{ color: "white" }} value={"1"} label="Team7" />
            </TabList>
          </Box>
          <TabPanel value={"0"}>
            <ProjectIdea />
          </TabPanel>
          <TabPanel value={"1"}>
            <TeamIntro />
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </>
  );
}
export default IntroductionMenu;
