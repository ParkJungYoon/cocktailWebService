import React, { useState, useEffect } from "react";
import LoungeRank from "./LoungeRank";
import LoungeForm from "./LoungeForm";
import sytles from "../../scss/Lounge.module.scss";
import LoungeTable from "./LoungeTable";
import * as Api from "../../api";

function LoungeLists({ userState }) {
  const [isForm, setIsForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  if (userState) {
    const [name, email] = userState;
  }

  return (
    <>
      {isForm ? (
        <LoungeForm setIsForm={setIsForm} />
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
          <LoungeTable />
        </>
      )}
    </>
  );
}

export default LoungeLists;
