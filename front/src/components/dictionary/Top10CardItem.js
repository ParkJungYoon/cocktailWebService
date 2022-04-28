import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function Top10CardItem({ cocktail }) {
  const navigate = useNavigate();

  const iconStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    color: "violet",
  };

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          sx={{ width: "300px", height: "300px" }}
          component="img"
          image={cocktail.imageUrl}
          loading="lazy"
        />
        <CardContent sx={{ width: "100%", bgcolor: "#212121", color: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            Name : {cocktail.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Rank : {cocktail.rank.rank}위
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
