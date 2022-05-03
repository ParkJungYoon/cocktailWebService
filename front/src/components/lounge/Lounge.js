import React, { useState } from "react";
import LoungeList from "./LoungeList";
import LoungeRank from "./LoungeRank";
import useUserHook from "../commons/useUserHook";
import * as Api from "../../api";

//style
import styles from "../../scss/Lounge.module.scss";
import { style } from "@mui/material/node_modules/@mui/system";

//로그 아웃 상태 : userState===false
//로그 인 상태 :  //userState.email,userState.name,userState.__id로 사용 가능합니다

function Lounge() {
  const userState = useUserHook();

  return (
    <>
      <div className={styles["lounge-rank-background"]}>
        <LoungeRank />
      </div>
      <div>
        <LoungeList props={{ userState }} />
      </div>
    </>
  );
}

export default Lounge;
