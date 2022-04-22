import * as React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import chart from "../../img/cocktail_top10.png";
import cocktails from "../../img/secondpage.jpg";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Increase the network loading priority of the background image. */}

        <Grid container spacing={1}>
          <Grid item xs={6} align="center">
            <Typography align="center" fontWeight={"bold"} variant="h4">
              What is the most popular cocktail?
            </Typography>
            <img src={chart} alt="" width={"100%"} />
            <Typography align="center" variant="h5">
              2002~2020 The Best Cocktail
            </Typography>
          </Grid>
          <Grid item xs={6} align="center">
            <img src={cocktails} alt="" width={"100%"} />
          </Grid>
        </Grid>

        <Button
          color="warning"
          variant="contained"
          size="small"
          sx={{ minWidth: 200, mt: 15 }}
          onClick={() => navigate("/top10")}
        >
          TOP 10 보러가기
        </Button>
      </Container>
    </>
  );
}
