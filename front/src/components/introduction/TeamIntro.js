import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

import UserDefaultImg from "../../imgs/userDefaultImg.jpg";
import JackPot from "../../imgs/JackPot.gif";

const TeamCard = ({ data }) => {
  return (
    <Grid container sx={{ px: 5, mb: 3 }} spacing={2}>
      <Grid item xs sx={{ my: "auto" }}>
        <Box
          component="img"
          src={data.image}
          alt=""
          width="25vw"
          minWidth="250px"
        />
      </Grid>
      <Grid
        item
        xs
        sx={{ m: "auto", bgcolor: "rgba(0,0,0,0.5)", p: 3, textAlign: "left" }}
      >
        <Box sx={{ color: "white" }}>
          <Typography variant="h6">이름 : {data.name}</Typography>
          <Typography variant="h6">
            좋아하는 칵테일 : {data.cocktail}
          </Typography>
          <Typography variant="h6">소감 :</Typography>
          <Typography variant="body1">{data.impression}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const team7 = [
  {
    name: "김동현",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    image: UserDefaultImg,
  },
  {
    name: "김상민",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    image: UserDefaultImg,
  },
  {
    name: "김승주",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    image: UserDefaultImg,
  },
  {
    name: "박정윤",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    image: UserDefaultImg,
  },
  {
    name: "백진영",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    image: UserDefaultImg,
  },
  {
    name: "송연석",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    image: UserDefaultImg,
  },
];

export default function TeamIntro() {
  return (
    <Container
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(64, 64, 64, 0.4)",
        py: 10,
        width: "70vw",
        borderRadius: "1.5rem",
      }}
    >
      <Box
        component="img"
        src={JackPot}
        alt=""
        width="10%"
        // height="80%"
      />
      <Typography variant="h5" sx={{ mb: 10 }}>
        Team7 JackPot
      </Typography>
      {team7.map((data, i) => {
        return <TeamCard key={i} data={data} />;
      })}
    </Container>
  );
}
