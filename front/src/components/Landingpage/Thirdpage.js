import * as React from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Grid,
  Container,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";
import thirdpage from "../../img/thirdpage.png";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "90%", height: "80%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={4}>
      <Grid item xs={1}></Grid>
      <Grid item xs={5} align="left">
        <div className="cocktailsWrapper">
          <div className="cocktailsText">
            <p>
              당신이 원하는 <span className="bold">칵테일</span>이 무엇인가요?
            </p>
            <p>그.. 술.. 이름이 뭐더라..??</p>
          </div>
          <img className="cocktails" src={thirdpage} width="70%" alt="" />

          <p
            className="gotoRecommend"
            onClick={() => {
              navigate("/Recommend");
            }}
          >
            칵테일 찾으러 가기
          </p>
        </div>
      </Grid>
      <Grid item xs={6} align="center">
        <QuiltedImageList sx={{ mr: 10 }} />
      </Grid>
    </Grid>
  );
}
