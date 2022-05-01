import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Grid } from "@mui/material";

import AllPosts from "./AllPosts";
import * as Api from "../../api";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#404040",
  color: "white",
  marginLeft: "auto",
  width: "30%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "80%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "150px",
    },
  },
}));

export default function CardSearch({ searchCocktails, setSearchCocktails }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(async () => {
    await Api.get("cocktails").then((res) => {
      setCocktails(res.data);
    });
  }, []);

  return (
    <>
      <Grid container spacing={1} sx={{ px: 15, mb: 5 }}>
        <Grid item xs={12}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(e) => setSearchCocktails(e.target.value)}
            />
          </Search>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={1} sx={{ px: 15 }}>
        <AllPosts
          cocktails={cocktails.filter((val) => {
            if (searchCocktails == "") {
              return "";
            } else if (
              val.name.toLowerCase().includes(searchCocktails.toLowerCase())
            ) {
              return val;
            }
          })}
        />
      </Grid>
    </>
  );
}
