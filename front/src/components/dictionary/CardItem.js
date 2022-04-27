import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
export default function ItemCard({
  img,
  name,
  ingredient,
  setOpenedCocktail,
  setIsDetailOpen,
}) {
  const navigate = useNavigate();
  const [isFront, setIsFront] = useState(true);

  const buttonStyle = { color: "white", border: "1px solid white" };
  const iconStyle = { position: "absolute", top: 10, right: 10 };

  return (
    <>
      <Button
        onClick={() => {
          isFront ? setIsFront(false) : setIsFront(true);
        }}
        sx={buttonStyle}
      >
        뒤집어!!
      </Button>
      <Button
        onClick={() => {
          setOpenedCocktail({ img, name, ingredient });
          setIsDetailOpen(true);
        }}
      >
        More...
      </Button>

      <div className={` ${isFront ? "cardFront" : "cardBack"}`}>
        <Card className=" front">
          <CardActionArea>
            <FavoriteIcon sx={iconStyle} onClick={() => {}} />
            <CardMedia
              height="250"
              component="img"
              image={img}
              loading="lazy"
            />
            <CardContent className="cocktailContent">
              <Typography
                className="contentText"
                gutterBottom
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className=" back">
          <CardActionArea>
            <CardContent className="descriptionBox">
              <Typography variant="body1">이름 : {name}</Typography>
              {/* {ingredient.map((item, i) => (
                <Typography key={i} variant="body2">
                  재료{i + 1} : {item}
                </Typography>
              ))} */}
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                asfdas
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
