import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  Collapse,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Top10CardChart from "./Top10CardChart";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  color: "white",
}));

export default function Top10CardItem({ cocktail }) {
  const navigate = useNavigate();
  console.log(cocktail);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const iconStyle = {
    color: "plum",
  };
  return (
    <>
      <Card
        sx={{
          mx: "auto",
          maxWidth: 600,
          backgroundColor: "rgba(64, 64, 64, 0.5)",
          color: "white",
          minHeight: 900,
        }}
      >
        <IconButton sx={iconStyle}>
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="500px"
          width="400px"
          image={cocktail.imageUrl}
          alt={cocktail.name}
        />
        <Typography sx={{ m: 1 }} variant="h4">
          {cocktail.name}
        </Typography>
        <Chip
          sx={{ color: "white", bgcolor: "plum", mr: 1 }}
          label={`${cocktail.rank.rank}위`}
        />
        <CardContent>
          {cocktail.taste.map((t, i) => {
            return (
              <Chip
                key={i}
                sx={{ color: "white", bgcolor: "plum", mr: 1 }}
                label={`#${t}`}
              />
            );
          })}
        </CardContent>
        <CardContent>
          <Typography variant="body1">{cocktail.description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>[재료]</Typography>
            {cocktail.ingredient.map((v, i) => {
              return (
                <Typography paragraph key={i}>
                  {i + 1}. {v}
                </Typography>
              );
            })}
            <Top10CardChart cocktail={cocktail.rank} />
            {/* <Typography>여기다가 차트 넣어야쥐</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
