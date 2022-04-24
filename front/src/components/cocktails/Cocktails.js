import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../../scss/Cocktails.scss";
import Card from "./ItemCard";
import * as Api from "../../api";
const items = [];
// 더미 데이터
for (let i = 0; i < 24; i++) {
  items.push({
    name: "드라이 마티니",
    img: "https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5Mz0/image/XnCm-TECJIbF3SB7CAphuGoqzxM.jpeg",
    description: "여기는 뭘 보여줄까..?",
  });
}

export default function Cocktails() {
  // db연결후 주석 해제
  //   const navigate = useNavigate();
  //   const [cocktails, setCocktails] = useState([])
  //   useEffect(() => {
  //     Api.get('cocktaillist').then((res) =>
  //         setCocktails(res.data)
  //     );
  // }, );

  return (
    <div className="cocktails">
      <Typography variant="h4" align="center" sx={{ pt: 5, mb: 10 }}>
        칵테일 백과사전
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 3 }}
        columnSpacing={{ xs: 8, sm: 15, md: 2 }}
        sx={{ px: 10 }}
      >
        {items.map((item) => {
          return (
            <Grid item xs={6} sm={4} md={3} align="center">
              <Card
                name={item.name}
                img={item.img}
                description={item.description}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
