import React from "react";
import { Box, Tab, ThemeProvider, createTheme } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import ProjectIdea from "./ProjectIdea";
import TeamIntro from "./TeamIntro";
import "../../scss/Introduce.scss";

function IntroduceMenu() {
  const [value, setValue] = React.useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
  });
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
    <>
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <Box sx={boxStyle}>
            <TabList onChange={handleChange}>
              <Tab sx={tabStyle} value={"0"} label="기획의도" />
              <Tab sx={tabStyle} value={"1"} label="Team7" />
            </TabList>
          </Box>
          <TabPanel value={"0"}>
            <ProjectIdea></ProjectIdea>
          </TabPanel>
          <TabPanel value={"1"}>
            <TeamIntro></TeamIntro>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </>
  );
}
export default IntroduceMenu;
