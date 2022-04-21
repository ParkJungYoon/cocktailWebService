import * as React from "react";
import { Button, Container, Typography, Grid, Box } from "@mui/material";

export default function Secondpage() {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Typography color="white" align="center" variant="h2" marked="center">
        Cocktail
      </Typography>
      <Typography
        color="white"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
        either a combination of spirits, or one or more spirits mixed with other
        ingredients such as fruit juice, flavored syrup, or cream. Cocktails
        vary widely across regions of the world, and many websites publish both
        original recipes and their own interpretations of older and more famous
        cocktails.
      </Typography>
      <Button
        color="warning"
        variant="contained"
        size="large"
        sx={{ minWidth: 200, mx: "auto" }}
      >
        TOP 10
      </Button>
    </Container>
  );
}
