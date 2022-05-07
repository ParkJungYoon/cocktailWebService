import React, { useState, useEffect } from "react";
import LoungeRank from "./LoungeRank";
import LoungeForm from "./LoungeForm";

import LoungeTable from "./LoungeTable";
import * as Api from "../../api";

function LoungeList({ user, setRankList }) {
  const [isForm, setIsForm] = useState(false);
  const [openItem, setOpenItem] = useState();
  const [isOpen, setIsOpen] = useState(false);
  // if (user) {
  //   const [name, email] = user;
  // }

  return (
    <>
      {isForm ? (
        <LoungeForm setIsForm={setIsForm} type={"add"} />
      ) : (
        <LoungeTable
          user={user}
          setIsForm={setIsForm}
          setRankList={setRankList}
          openItem={openItem}
          setOpenItem={setOpenItem}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}

export default LoungeList;
