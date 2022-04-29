import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <div className="thirdpageContainer">
      <Grid container className="dictionary">
        <Grid item xs className="textWrapper">
          <Typography className="dictionaryText" variant="h4">
            Or You can search You can search on Our Cocktail Dictionary
          </Typography>
          <Box className="buttonBox">
            <Button
              variant="contained"
              className="dictionaryButton"
              onClick={() => {
                navigate("/dictionary");
              }}
            >
              Explore
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
