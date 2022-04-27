import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

export default function ItemCard({ img, name, ingredient }) {
  return (
    <div className="card">
      <Card sx={{ maxWidth: 270 }} className=" front">
        <CardActionArea>
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
