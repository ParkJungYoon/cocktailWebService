import React, { useState } from "react";
import { Card, CardMedia, CardContent, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export default function AllCardItem({ cocktail }) {
  const navigate = useNavigate();
  const [isFront, setIsFront] = useState(true);

  const buttonStyle = {
    position: "absolute",
    bottom: 5,
    right: 6,
    color: "violet",
  };
  const iconStyle = {
    color: "violet",
  };
  const handleOnClick = () => {
    isFront ? setIsFront(false) : setIsFront(true);
  };
  return (
    <>
      <Box className={` ${isFront ? "cardFront" : "cardBack"}`}>
        <Card className="front">
          <FavoriteIcon sx={iconStyle} />
          <CardMedia
            height="250"
            component="img"
            image={cocktail.imageUrl}
            loading="lazy"
          />
          <CardContent className="cocktailContent">{cocktail.name}</CardContent>
          <CardContent>
            <Button onClick={handleOnClick} sx={buttonStyle}>
              <CompareArrowsIcon />
            </Button>
          </CardContent>
        </Card>

        <Card className=" back">
          <CardContent className="descriptionBox" height="250">
            {cocktail.name}
            {cocktail.ingredient.map((item, i) => (
              <li key={i}>
                재료{i + 1} : {item}
              </li>
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
