import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UserInfo from "./UserInfo";
import Bookmark from "./Bookmark";
import Like from "./Like";

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

function UserTab(id) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const labels = ["😀 내 정보", "📌 북마크", "👍 좋아요"];

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            //   orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {labels.map((label, i) => (
              <Tab label={label} {...a11yProps(i)} />
            ))}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <UserInfo></UserInfo>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Bookmark></Bookmark>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Like></Like>
        </TabPanel>
      </Box>
    </>
  );
}

export default UserTab;
