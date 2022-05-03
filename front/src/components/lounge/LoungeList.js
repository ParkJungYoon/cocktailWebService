import React from "react";
import LoungeRank from "./LoungeRank";
import * as Api from "../../api";

function LoungeList({ userState, setIsForm }) {
  return (
    <>
      <button
        onClick={() => {
          setIsForm(true);
        }}
      ></button>
    </>
  );
}

export default LoungeList;
