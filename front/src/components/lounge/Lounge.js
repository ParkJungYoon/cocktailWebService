import React, { useEffect, useState } from "react";
import LoungeList from "./LoungeList";
import LoungeRank from "./LoungeRank";
import useUserHook from "../commons/useUserHook";
import * as Api from "../../api";

//style
import { Box, Typography } from "@material-ui/core";
import bg1 from "../../imgs/loungeRankBgImg.jpg";
function Lounge() {
  const userState = useUserHook();
  const user = userState.user;
  const [rankList, setRankList] = useState([]);
  useEffect(async () => {
    await Api.get("boardList").then((res) => {
      res = res.data.sort((a, b) => {
        return b.comment.length - a.comment.length;
      });
      setRankList(res.slice(0.5)); //왜 안먹히는지 이해 불가 ;;
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(64, 64, 64, 0.4)",
          mx: "auto",
          py: 1,
          px: 2,
          mt: 22,
          width: "70%",
          borderTop: "1px solid white",
          borderBottom: "1px solid white",
          color: "white",
        }}
      >
        <Typography variant="h5" align="center">
          Lounge
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "50vh",
          mt: 5,
          mx: 10,
        }}
      >
        <LoungeRank />
      </Box>
      <Box sx={{ mt: 10 }}>
        <LoungeList user={user} setRankList={setRankList} />
      </Box>
    </>
  );
}

export default Lounge;
