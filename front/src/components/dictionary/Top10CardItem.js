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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const iconStyle = {
    color: "pink",
  };
  console.log(cocktail);
  return (
    <>
      <Card
        sx={{
          maxWidth: 600,
          backgroundColor: "rgba(64, 64, 64, 0.5)",
          color: "white",
          minHeight: "800px",
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
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{cocktail.description}</Typography>
            <Typography paragraph>Ingrdient:</Typography>
            <Typography paragraph>{cocktail.ingredient}</Typography>
            <Typography paragraph>{cocktail.taste}</Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
