import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  IconButton,
  Typography,
} from "@mui/material";

export default function top10Card({ cocktailImg, title, body }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={cocktailImg}
          alt="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
