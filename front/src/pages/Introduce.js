import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Tab,
  Tabs,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ProjectIdea from "../components/introduce/ProjectIdea";
import TeamIntro from "../components/introduce/TeamIntro";
import "../scss/Introduce.scss";

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

function IntroducePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const labels = ["기획의도", "Team7"];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="dictionary">
          <Grid container>
            <Grid item xs={12}>
              <Grid>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      className="introduceTabs"
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      sx={{ borderColor: "white" }}
                    >
                      {labels.map((label, i) => (
                        <Tab
                          sx={{ color: "gray" }}
                          label={label}
                          {...a11yProps(i)}
                        />
                      ))}
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <ProjectIdea></ProjectIdea>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <TeamIntro></TeamIntro>
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
}

export default IntroducePage;
