import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

import * as Api from "../../api";

// style
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(64, 64, 64, 0.7)",
  color: "white",
  marginLeft: "auto",
  marginRight: "50px",
  width: "250px",
  height: "50px",
}));

const SearchButton = styled("button")(({ theme }) => ({
  position: "absolute",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(64, 64, 64, 0.7)",
  color: "white",
  width: "50px",
  height: "50px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "50px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  height: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function CardSearch({
  search,
  setSearch,
  setFilteredCocktails,
}) {
  const [word, setWord] = useState("");

  // search에 입력된 값이 바뀔때마다 param으로 post 요청
  const handleOnClick = async () => {
    await Api.post(`cocktails/${word}`).then((res) => {
      setFilteredCocktails(res.data);
    });
    setSearch(true);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="칵테일을 검색하세요."
        onChange={(e) => setWord(e.target.value)}
      />
      <SearchButton onClick={handleOnClick}>검색</SearchButton>
    </Search>
  );
}
