import React, { useState, useEffect } from "react";
import LoungeRank from "./LoungeRank";
import LoungeForm from "./LoungeForm";
import sytles from "../../scss/Lounge.module.scss";
import LoungeTable from "./LoungeTable";
import * as Api from "../../api";

function LoungeList({ user }) {
  const [isForm, setIsForm] = useState(false);
  // if (user) {
  //   const [name, email] = user;
  // }

  return (
    <>
      {isForm ? (
        <LoungeForm setIsForm={setIsForm} />
      ) : (
        <LoungeTable user={user} setIsForm={setIsForm} />
      )}
    </>
  );
}

export default LoungeList;
