import React, { useState, useEffect } from "react";
import { Box, Stack, Button } from "@mui/material";

function CardDetail({ cocktails, setIsDetailOpen }) {
  const name = cocktails.name;
  const visitors = cocktails.visitors;
  const rank = cocktails.rank;

  const stackStyle = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  };
  const handleButton = () => {
    setIsDetailOpen(false);
  };

  return (
    <>
      <Stack sx={stackStyle}>
        <Box>
          <h1>칵테일 이름 : {name}</h1>
        </Box>
        <Box>
          <img src="" alt="img" width={"300px"} /> 이미지~~
        </Box>
        <Box>
          <p> 홈페이지 방문자 수 : {visitors}</p>
        </Box>
        <Box>차트~</Box>
        <Box>순위: {rank}</Box>
        <Box>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Box>
        <Box>
          <Button onClick={handleButton}> Close</Button>
        </Box>
      </Stack>
    </>
  );
}

export default CardDetail;
