import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Top10SortButton({ top10Cocktails, setTop10Cocktails }) {
  // state
  const [order, setOrder] = useState("");

  // sort 함수
  const sortCocktails = (isAsc, key) => {
    if (isAsc && key === "name") {
      setOrder("이름 오름차순");
      top10Cocktails.sort((A, B) => {
        return A.name < B.name ? -1 : A.name > B.name ? 1 : 0;
      });
      setTop10Cocktails([...top10Cocktails]);
    } else if (!isAsc && key == "name") {
      setOrder("이름 내림차순");
      top10Cocktails.sort((A, B) => {
        return A.name < B.name ? 1 : A.name > B.name ? -1 : 0;
      });
      setTop10Cocktails([...top10Cocktails]);
    } else if (isAsc && key === "rank") {
      setOrder("순위 오름차순");
      top10Cocktails.sort((A, B) => {
        return A.rank.rank < B.rank.rank
          ? -1
          : A.rank.rank > B.rank.rank
          ? 1
          : 0;
      });
      setTop10Cocktails([...top10Cocktails]);
    } else if (!isAsc && key === "rank") {
      setOrder("순위 내림차순");
      top10Cocktails.sort((A, B) => {
        return A.rank.rank < B.rank.rank
          ? 1
          : A.rank.rank > B.rank.rank
          ? -1
          : 0;
      });
      setTop10Cocktails([...top10Cocktails]);
    }
  };

  return (
    <Box sx={{ height: 50, width: 150, bgcolor: "rgba(64, 64, 64, 0.4)" }}>
      <FormControl fullWidth>
        <Select
          value={order}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ color: "white" }}
        >
          <MenuItem value="">정렬기준</MenuItem>
          <MenuItem
            value={"이름 오름차순"}
            onClick={() => {
              sortCocktails(true, "name");
            }}
          >
            이름 오름차순
          </MenuItem>
          <MenuItem
            value={"이름 내림차순"}
            onClick={() => {
              sortCocktails(false, "name");
            }}
          >
            이름 내림차순
          </MenuItem>
          <MenuItem
            value={"순위 오름차순"}
            onClick={() => {
              sortCocktails(true, "rank");
            }}
          >
            순위 오름차순
          </MenuItem>
          <MenuItem
            value={"순위 내림차순"}
            onClick={() => {
              sortCocktails(false, "rank");
            }}
          >
            순위 내림차순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
