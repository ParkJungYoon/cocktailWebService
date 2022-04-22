import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import * as React from "react";

export default function Firstpage() {
  return (
    <Grid container spacing={1} sx={{ mx: 3 }}>
      <Grid item xs={12}>
        <Typography
          fontWeight={"bold"}
          color="saddlebrown"
          variant="h3"
          marked="center"
          sx={{ mt: 15 }}
        >
          JACKPOT
        </Typography>
        <Typography color="saddlebrown" variant="h6" sx={{ my: 1 }}>
          Welcome to JACKPOT!
        </Typography>
        <Typography color="saddlebrown" variant="h6" sx={{ my: 1 }}>
          A cocktail is a mixed drink typically made with a distilled liquor
        </Typography>
        <Typography color="saddlebrown" variant="h6" sx={{ mb: 10 }}>
          as its base ingredient that is then mixed with other ingredients or
          garnishments
        </Typography>
      </Grid>
    </Grid>
  );
}
