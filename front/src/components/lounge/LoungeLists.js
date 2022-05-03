import React, { useState, useEffect } from "react";
import LoungeRank from "./LoungeRank";
import LoungeForm from "./LoungeForm";
import LoungeListItem from "./";
import * as Api from "../../api";

function LoungeLists({ userState }) {
  const [isForm, setIsForm] = useState(false);
  if (userState) {
    const [name, email] = userState;
  }
  useEffect(async () => {
    await Api.get("boardList");
  }, []);
  return (
    <>
      {isForm ? (
        <LoungeForm />
      ) : (
        <>
          <button
            onClick={() => {
              if (userState === false) alert("로그인 필요");
              else setIsForm(true);
            }}
          >
            Create
          </button>
          <LoungeListItem />
        </>
      )}
      <button
        onClick={() => {
          setIsForm(true);
        }}
      ></button>
    </>
  );
}

export default LoungeLists;
