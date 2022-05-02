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

export default function AllCardItem({ cocktail, liked }) {
  const navigate = useNavigate();
  const [isFront, setIsFront] = useState(true);
  const [isLike, setIsLike] = useState(liked[cocktail.name]);
  const [color, setColor] = useState(isLike ? "plum" : "white");
  const [likeNum, setLikeNum] = useState(cocktail.likes);

  const buttonStyle = {
    position: "absolute",
    bottom: 5,
    right: 6,
    color: "violet",
  };

  const handleOnClickLike = async () => {
    if (!isLike) {
      await Api.post(`like/${cocktail._id}`);
      setLikeNum((prev) => prev + 1);
      setIsLike(true);
      setColor("plum");
    } else {
      await Api.delete(`like/${cocktail._id}`);
      setLikeNum((prev) => prev - 1);
      setIsLike(false);
      setColor("white");
    }
  };

  // Card flip
  const handleOnClick = () => {
    isFront ? setIsFront(false) : setIsFront(true);
  };
  return (
    <>
      <Box className={` ${isFront ? "cardFront" : "cardBack"}`}>
        <Card className="front">
          <IconButton onClick={handleOnClickLike}>
            {liked[cocktail.name] ? (
              <FavoriteIcon sx={{ color: { color } }} />
            ) : (
              <FavoriteIcon sx={{ color: { color } }} />
            )}
          </IconButton>
          {likeNum}
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
