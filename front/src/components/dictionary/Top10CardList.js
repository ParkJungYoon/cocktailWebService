import React from "react";
import { Grid } from "@mui/material";

import CardItem from "./CardItem";
import CardDetail from "./CardDetail";

export default function Top10CardList({
  cocktails,
  searchCocktails,
  isDetailOpen,
  setIsDetailOpen,
}) {
  return (
    <>
      {isDetailOpen ? (
        <CardDetail cocktails={cocktails} setIsDetailOpen={setIsDetailOpen} />
      ) : (
        <Grid container spacing={3}>
          {cocktails
            .filter((val) => {
              if (searchCocktails == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchCocktails.toLowerCase())
              ) {
                return val;
              }
            })
            .map((cocktail, i) => {
              return (
                <>
                  {cocktail.rank != undefined && cocktail.rank.rank <= 10 && (
                    <Grid key={i} item md>
                      <CardItem
                        cocktail={cocktail}
                        setIsDetailOpen={setIsDetailOpen}
                      />
                    </Grid>
                  )}
                </>
              );
            })}
        </Grid>
      )}
    </>
  );
}
