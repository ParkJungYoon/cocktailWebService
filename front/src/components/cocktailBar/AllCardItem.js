import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import * as Api from "../../api";

export default function AllCardItem({ cocktail }) {
  const navigate = useNavigate();
  const [isFront, setIsFront] = useState(true);
  const [isLike, setIsLike] = useState(false);

  const buttonStyle = {
    position: "absolute",
    bottom: 5,
    right: 6,
    color: "violet",
  };

  const handleOnClick = () => {
    isFront ? setIsFront(false) : setIsFront(true);
  };
  const handleOnClickLike = () => {
    if (isLike) {
      setIsLike(false);
    } else {
      setIsLike(true);
    }
  };

  return (
    <>
      <Box className={` ${isFront ? "cardFront" : "cardBack"}`}>
        <Card className="front">
          <IconButton onClick={handleOnClickLike}>
            {isLike ? (
              <FavoriteIcon sx={{ color: "plum" }} />
            ) : (
              <FavoriteIcon sx={{ color: "white" }} />
            )}
          </IconButton>
          {isLike ? cocktail.likes + 1 : cocktail.likes}
          <CardMedia
            height="250"
            component="img"
            image={cocktail.imageUrl}
            loading="lazy"
          />
          <CardContent className="cocktailContent">
            <Typography variant="h6">{cocktail.name}</Typography>
          </CardContent>
          <CardContent>
            <Button onClick={handleOnClick} sx={buttonStyle}>
              <CompareArrowsIcon />
            </Button>
          </CardContent>
        </Card>

        <Card className=" back">
          <CardContent className="descriptionBox" height="250">
            <Typography
              variant="h5"
              align="center"
              sx={{ py: 2, mb: 5, borderBottom: "2px solid plum" }}
            >
              {cocktail.name}
            </Typography>
            {cocktail.ingredient.map((item, i) => (
              <Typography key={i} variant="body1">
                재료{i + 1} : {item}
              </Typography>
            ))}
          </CardContent>
          <Button onClick={handleOnClick} sx={buttonStyle}>
            <CompareArrowsIcon />
          </Button>
        </Card>
      </Box>
    </>
  );
}
