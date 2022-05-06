import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

import UserDefaultImg from "../../imgs/userDefaultImg.jpg";
import JackPot from "../../imgs/JackPot.gif";

const TeamCard = ({ data }) => {
  return (
    <Grid container sx={{ px: 5 }}>
      {data.isLeft && (
        <Grid item xs>
          <Box
            component="img"
            src={UserDefaultImg}
            alt=""
            width="80%"
            // height="80%"
          />
        </Grid>
      )}
      <Grid
        item
        xs
        sx={{ my: "auto", bgcolor: "rgba(0,0,0,0.5)", p: 3, textAlign: "left" }}
      >
        <Box sx={{ color: "white" }}>
          <Typography variant="h5">이름 : {data.name}</Typography>
          <Typography variant="h5">
            좋아하는 칵테일 : {data.cocktail}
          </Typography>
          <Typography variant="h5">소감 :</Typography>
          <Typography variant="body1">{data.impression}</Typography>
        </Box>
      </Grid>
      {!data.isLeft && (
        <Grid item xs>
          <Box
            component="img"
            src={UserDefaultImg}
            alt=""
            width="80%"
            // height="80%"
          />
        </Grid>
      )}
    </Grid>
  );
};

const team7 = [
  {
    name: "김동현",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    isLeft: true,
  },
  {
    name: "김상민",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    isLeft: false,
  },
  {
    name: "김승주",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    isLeft: true,
  },
  {
    name: "박정윤",
    impression: "소감~~~~~~~",
    isLeft: false,
    cocktail: "Martini",
  },
  {
    name: "백진영",
    impression: "소감~~~~~~~",
    cocktail: "Martini",
    isLeft: true,
  },
  {
    name: "송연석",
    impression: "소감~~~~~~~",
    isLeft: false,
    cocktail: "Martini",
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
