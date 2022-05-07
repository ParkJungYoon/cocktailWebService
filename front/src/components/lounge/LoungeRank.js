import React, { useState, useEffect } from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import * as Api from "../../api.js";
import cocktail1 from "../../imgs/cocktail1.png";
import cocktail2 from "../../imgs/cocktail2.png";
import cocktail3 from "../../imgs/cocktail3.png";
import cocktail4 from "../../imgs/cocktail4.png";
import cocktail5 from "../../imgs/cocktail5.png";
import { makeStyles } from "@material-ui/core/styles";

function LoungeRank({ setIsOpen }) {
  const [rankList, setRankList] = useState();
  useEffect(async () => {
    await Api.get("boardList")
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        res = res.sort((a, b) => {
          return b.comment.length - a.comment.length;
        });
        setRankList(res.slice(0, 5));
      });
  }, []);

  if (rankList) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        {rankList.map((v, i) => {
          return (
            <Box key={i}>
              <Typography
                sx={{ color: "white", fontSize: "5vw" }}
                align="center"
              >
                {v.title}
              </Typography>
              <Box component="img" src={i} width="10vw" />
            </Box>
          );
        })}
      </Container>
    );
  } else {
    return null;
  }
}

export default LoungeRank;
