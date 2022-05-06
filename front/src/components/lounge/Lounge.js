import React, { useEffect, useState } from "react";
import LoungeList from "./LoungeList";
import LoungeRank from "./LoungeRank";
import useUserHook from "../commons/useUserHook";
import * as Api from "../../api";

//style
import styles from "../../scss/Lounge.module.scss";
import { style } from "@mui/material/node_modules/@mui/system";

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
      <div className={styles["lounge-rank-background"]}>
        <LoungeRank />
      </div>
      <div st={{}}>
        <LoungeList user={user} setRankList={setRankList} />
      </div>
    </>
  );
}

export default Lounge;
