import Card from "./ItemCard";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import * as Api from "../../api";
import Dictionary from "./Dictionary";
import TestDetailCocktail from "../test/TestDetailCocktail";

export default function CardList() {
  const [isOpen, setIsOpen] = useState(false);
  const [opendCocktail, setOpendCocktail] = useState("name");
  const [cocktails, setCocktails] = useState([]);
  const [topTenLists, setTopTenLists] = useState([]);

  // 칵테일 데이터 받아오기
  useEffect(() => {
    Api.get("cocktails").then((res) => setCocktails(res.data));
    Api.get("rank10").then((res) => {
      setTopTenLists(res.data.map((v) => v.name));
    });
  }, []);
  console.log(cocktails);

  return (
    <>
      {isOpen ? (
        <TestDetailCocktail
          opendCocktail={opendCocktail}
          setIsOpen={setIsOpen}
        />
      ) : (
        <Grid container spacing={3}>
          {cocktails.map((cocktail, i) => {
            return (
              <Grid key={i} item md>
                <Card
                  name={cocktail.name}
                  img={cocktail.imageUrl}
                  ingredient={cocktail.ingredient}
                  setOpendCocktail={setOpendCocktail}
                  setIsOpen={setIsOpen}
                  rank={topTenLists}
                ></Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}
