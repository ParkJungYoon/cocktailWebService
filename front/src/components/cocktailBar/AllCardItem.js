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
import { useSnackbar } from "notistack";

import * as Api from "../../api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export default function AllCardItem({ cocktail }) {
  // state
  const [isFront, setIsFront] = useState(true);
  const [isLike, setIsLike] = useState(cocktail.isLiked);
  const [color, setColor] = useState(isLike ? "#ff3897" : "white");
  const [likeNum, setLikeNum] = useState(cocktail.likes);
  const { enqueueSnackbar } = useSnackbar();

  // style
  const buttonStyle = {
    position: "absolute",
    bottom: 5,
    right: 6,
    color: "#ff3897",
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
        setColor("#ff3897");
      } catch (e) {
        if (e.message === "Request failed with status code 401") {
          enqueueSnackbar("Login required");
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
            <FavoriteIcon
              sx={{
                color: color,
              }}
            />
          </IconButton>
          {likeNum}
          <CardMedia
            height="180"
            component="img"
            image={cocktail.imageUrl}
            loading="lazy"
          />
          <CardContent className="cocktailContent">
            <Typography variant="body1">{cocktail.name}</Typography>
          </CardContent>
          <CardContent>
            <Button onClick={handleOnClick} sx={buttonStyle}>
              <CompareArrowsIcon />
            </Button>
          </CardContent>
        </Card>

        <Card className=" back">
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              sx={{ mb: 2, borderBottom: "2px solid #ff3897" }}
            >
              {cocktail.name}
            </Typography>
            {cocktail.ingredient.map((item, i) => (
              <Typography key={i} sx={{ fontSize: "12px" }}>
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
