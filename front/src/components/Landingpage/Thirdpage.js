import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import cocktails from "../../img/cocktails.png";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function Thirdpage() {
  const navigate = useNavigate();
  return (
    <Box component="section" sx={{ display: "flex" }}>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          marked="center"
          component="h2"
          color="white"
          sx={{}}
        >
          칵테일 이름 뭐더라..??
        </Typography>
        <img src={cocktails} alt="" width={"100%"} />
        <div>
          <Grid color="white" container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            navigate("/Recommend");
          }}
          color="warning"
          sx={{ mt: 10 }}
        >
          나만의 칵테일 만들러 가기
        </Button>
      </Container>
    </Box>
  );
}

export default Thirdpage;
