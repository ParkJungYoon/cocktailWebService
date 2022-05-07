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
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Top10CardChart from "./Top10CardChart";

// 더보기
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

  // state
  const [expanded, setExpanded] = useState(false);

  // Expand Button Click Event
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // style
  const cardStyle = {
    mx: "auto",
    maxWidth: 400,
    backgroundColor: "rgba(64, 64, 64, 0.5)",
    color: "white",
    minHeight: 720,
  };
  return (
    <>
      <Card sx={cardStyle}>
        <Typography
          align="center"
          variant="h6"
          sx={{
            color: "white",
            m: 1,
          }}
        >
          {cocktail.rank.rank}위
        </Typography>
        <CardMedia
          component="img"
          height="350px"
          width="300px"
          image={cocktail.imageUrl}
          alt={cocktail.name}
        />

        <Typography sx={{ m: 1 }} variant="h5">
          {cocktail.name}
        </Typography>
        <CardContent>
          {cocktail.taste.map((t, i) => {
            return (
              <Chip
                key={i}
                sx={{
                  color: "white",
                  bgcolor: "#ff3897",
                  mb: 1,
                  mr: 1,
                }}
                label={`#${t}`}
              />
            );
          })}
        </CardContent>
        <CardContent>
          <Typography variant="body2">{cocktail.description}</Typography>
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
            <Typography
              variant="h5"
              align="center"
              sx={{ pb: 3, mb: 3, borderBottom: "2px solid #ff3897" }}
            >
              칵테일에 들어가는 재료
            </Typography>
            <Box sx={{ mb: 5 }}>
              {cocktail.ingredient.map((v, i) => {
                return (
                  <Typography sx={{ mx: 5 }} variant="body1" key={i}>
                    {i + 1}. {v}
                  </Typography>
                );
              })}
            </Box>

            <Typography
              variant="h5"
              align="center"
              sx={{ pb: 3, mb: 3, borderBottom: "2px solid #ff3897" }}
            >
              칵테일에 제조법
            </Typography>
            {cocktail.method.map((v, i) => {
              return (
                <Typography sx={{ mx: 5 }} variant="body1" key={i}>
                  {i + 1}단계. {v}
                </Typography>
              );
            })}
            <Top10CardChart cocktail={cocktail.rank} />
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
