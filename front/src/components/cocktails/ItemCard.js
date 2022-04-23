import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

export default function ItemCard({ img, name, description }) {
  return (
    <div className="card">
      <Card className="front">
        <CardActionArea>
          <CardMedia component="img" height="100%" image={img} />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="back">
        <CardActionArea>
          <CardMedia component="img" height="100%" image={img} />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
