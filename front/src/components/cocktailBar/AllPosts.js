import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import * as Api from "../../api";
import AllCardItem from "./AllCardItem";

export default function AllPosts({ cocktails }) {
  // state
  const [like, setLike] = useState([]);
  const liked = {};

  // user가 like한 칵테일 목록 불러오기
  useEffect(async () => {
    await Api.get("cocktails/user/0").then((res) => {
      setLike(res.data);
      console.log(like);
    });
  }, []);

  // 불러온 칵테일 목록을 dictionary 형태로 변환
  like.map((v) => (liked[v.name] = true));

  return (
    <>
      {cocktails.map((cocktail, i) => {
        return (
          <Grid key={i} item sm>
            <AllCardItem liked={liked} cocktail={cocktail} />
          </Grid>
        );
      })}
    </>
  );
}
