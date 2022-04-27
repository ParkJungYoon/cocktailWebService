import React from "react";
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
export default function ItemCard({ img, name, ingredient }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate("/")}>
      <Card sx={{ maxWidth: 270 }} className=" front">
        <CardActionArea>
          <FavoriteIcon sx={{ position: "absolute", top: 10, right: 10 }} />
          <CardMedia height="250" component="img" image={img} loading="lazy" />
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
            {ingredient.map((item, i) => (
              <Typography key={i} variant="body2">
                재료{i + 1} : {item}
              </Typography>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
