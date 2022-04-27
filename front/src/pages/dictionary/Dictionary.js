import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import * as Api from "../../api";
import "../../scss/Dictionary.scss";
import CardMenu from "../../components/dictionary/CardMenu";
import CardSearch from "../../components/dictionary/CardSearch";
export default function Dictionary() {
  // 필터기능
  const [searchCocktails, setSearchCocktails] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 탭 기능
  const [cocktails, setCocktails] = useState([]);
  const [top10Cocktails, setTop10Cocktails] = useState([]);

  // 디테일 기능
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [opendedCocktail, setOpenedCocktail] = useState("name");

  //state너무 많은데... context + reducer를 쓸까요?

  useEffect(async () => {
    await Api.get("cocktails").then((res) => {
      console.log(res.data);
      setCocktails(res.data);
    });
    await Api.get("rank10").then((res) => setTop10Cocktails(res.data));
  }, []);
  return (
    <>
      <div className="dictionary">
        <Grid container>
          <Grid item xs={12}>
            <Typography className="dictionaryTitle">Dictionary</Typography>
          </Grid>

          <Grid item xs={12} color="white">
            <CardMenu
              cocktails={cocktails}
              top10Cocktails={top10Cocktails}
              searchCocktails={searchCocktails}
              setSearchCocktails={setSearchCocktails}
              isDetailOpen={isDetailOpen}
              setIsDetailOpen={setIsDetailOpen}
              opendedCocktail={opendedCocktail}
              setOpenedCocktail={setOpenedCocktail}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
