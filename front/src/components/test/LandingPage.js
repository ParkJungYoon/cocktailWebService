import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginForm from "../user/LoginForm";
import SkeletonFunc from "./SkeletonFunc";
import Chart from "./Chart.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LandingPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <h1>Test Ladning Page</h1>
      <SkeletonFunc />
      <div style={{ width: 600 }}>
        <Chart />
      </div>
    </>
  );
};

export default LandingPage;
