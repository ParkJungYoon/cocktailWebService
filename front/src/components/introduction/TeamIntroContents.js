import React from "react";
import { Box, Grid, Card, CardMedia, Container } from "@mui/material";
import "../../scss/Introduction.scss";
import UserDefaultImg from "../../imgs/userDefaultImg.jpg";
import JackPot from "../../imgs/JackPot.gif";

function TeamIntro() {
  const imageAlignCenter = { textAlign: "-webkit-center" };
  const imageAlignLeft = { textAlign: "-webkit-left" };
  const imageAlignRight = { textAlign: "-webkit-right" };
  const textAlignCenter = { alignItems: "center" };

  return (
    <div className="teamIntro">
      <Container sx={{ textAlign: "center", fontSize: "50px" }}>
        <img
          className=""
          src={JackPot}
          alt=""
          width="10%"
          // height="80%"
        />
        {} Team7 JackPot
        <br />
      </Container>
      {/* 팀원 소개 시작 */}
      <Box ml={2} mr={2}>
        {/* 첫번째 왼쪽 그림 */}
        <Grid mt={10} mb={3}>
          <Grid container sx={textAlignCenter}>
            <Grid item xs={6} md={6} sx={imageAlignRight}>
              <Box>
                <img
                  className=""
                  src={UserDefaultImg}
                  alt=""
                  width="70%"
                  // height="80%"
                  style={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
            <Grid className="infro" item xs={6} md={6}>
              <Grid ml={12}>
                {/* 내용 입력 */}
                <Grid mb={1}>name (position)</Grid>
                <Grid mb={1}>소감</Grid>
                <Grid mb={1}>Favorite Cocktail : + 해당 칵테일로 Link?</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* 오른쪽 그림 */}
        <Grid mb={3}>
          <Grid container sx={textAlignCenter}>
            <Grid className="infro" item xs={6} md={6}>
              {/* 내용 입력 */}
              <Grid ml={12}>
                <Grid>name (position)</Grid>
                <Grid>소감</Grid>
                <Grid>Favorite Cocktail : + 해당 칵테일로 Link?</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6} sx={imageAlignLeft}>
              <Box>
                <img
                  className=""
                  src={UserDefaultImg}
                  alt=""
                  width="70%"
                  // height="80%"
                  style={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* 왼쪽 그림 */}
        <Grid mb={3}>
          <Grid container sx={textAlignCenter}>
            <Grid item xs={6} md={6} sx={imageAlignRight}>
              <Box>
                <img
                  className=""
                  src={UserDefaultImg}
                  alt=""
                  width="70%"
                  // height="80%"
                  style={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
            <Grid className="infro" item xs={6} md={6}>
              {/* 내용 입력 */}
              <Grid ml={12}>
                <Grid mb={1}>name(position)</Grid>
                <Grid mb={1}>소감</Grid>
                <Grid mb={1}>Favorite Cocktail : + 해당 칵테일로 Link?</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* 오른쪽 그림 */}
        <Grid mb={3}>
          <Grid container sx={textAlignCenter}>
            <Grid className="infro" item xs={6} md={6}>
              {/* 내용 입력 */}
              <Grid ml={12}>
                <Grid>name (position)</Grid>
                <Grid>소감</Grid>
                <Grid>Favorite Cocktail : + 해당 칵테일로 Link?</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6} sx={imageAlignLeft}>
              <Box>
                <img
                  className=""
                  src={UserDefaultImg}
                  alt=""
                  width="70%"
                  // height="80%"
                  style={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* 왼쪽 그림 */}
        <Grid mb={3}>
          <Grid container sx={textAlignCenter}>
            <Grid item xs={6} md={6} sx={imageAlignRight}>
              <Box>
                <img
                  className=""
                  src={UserDefaultImg}
                  alt=""
                  width="70%"
                  // height="80%"
                  style={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
            <Grid className="infro" item xs={6} md={6}>
              <Grid ml={12}>
                {/* 내용 입력 */}
                <Grid mb={1}>name(position)</Grid>
                <Grid mb={1}>소감</Grid>
                <Grid mb={1}>Favorite Cocktail : + 해당 칵테일로 Link?</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* 오른쪽 그림 */}
        <Grid mb={3}>
          <Grid container sx={textAlignCenter}>
            <Grid className="infro" item xs={6} md={6}>
              {/* 내용 입력 */}
              <Grid ml={12}>
                <Grid>name (position)</Grid>
                <Grid>소감</Grid>
                <Grid>Favorite Cocktail : + 해당 칵테일로 Link?</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6} sx={imageAlignLeft}>
              <Box>
                <img
                  className=""
                  src={UserDefaultImg}
                  alt=""
                  width="70%"
                  // height="80%"
                  style={{ borderRadius: "1rem" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default TeamIntro;
