import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import * as Api from "../../api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";

export default function AllCardItem({ cocktail }) {
  const navigate = useNavigate();

  // state
  const [isFront, setIsFront] = useState(true);
  const [isLike, setIsLike] = useState(cocktail.isLiked);
  const [color, setColor] = useState(isLike ? "plum" : "white");
  const [likeNum, setLikeNum] = useState(cocktail.likes);

  // style
  const buttonStyle = {
    position: "absolute",
    bottom: 5,
    right: 6,
    color: "violet",
  };

  // Card flip event
  const handleOnClick = () => {
    isFront ? setIsFront(false) : setIsFront(true);
  };

  // Like click event
  const handleOnClickLike = async () => {
    if (!isLike) {
      try {
        await Api.post(`like/${cocktail._id}`);
        setLikeNum((prev) => prev + 1);
        setIsLike(true);
        setColor("plum");
      } catch (e) {
        if (e.message === "Request failed with status code 401") {
          alert("로그인이 필요한 서비스입니다.");
        }
      }
    } else {
      try {
        await Api.delete(`like/${cocktail._id}`);
        setLikeNum((prev) => prev - 1);
        setIsLike(false);
        setColor("white");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Box className={` ${isFront ? "cardFront" : "cardBack"}`}>
        <Card className="front">
          <IconButton onClick={handleOnClickLike}>
            <FavoriteIcon sx={{ color: color }} />
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
