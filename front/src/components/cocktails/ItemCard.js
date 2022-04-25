import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function ItemCard({ img, name, ingredient }) {
  return (
    <div className="card">
      <Card className="front" align="center">
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            width="300px"
            image={img}
            loading="lazy"
          />
          <CardContent className="nameBox">
            <p className="cocktailName">{name}</p>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="back">
        <CardActionArea>
          <CardContent className="descriptionBox">
            <Typography gutterBottom variant="h6">
              <p>이름 : {name}</p>
              {ingredient.map((item, i) => (
                <p key={i}>
                  재료{i + 1} : {item}
                </p>
              ))}
            </Typography>
            <Box className="buttonBox">
              <Button className="moreButton">자세히 보러 가기</Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
