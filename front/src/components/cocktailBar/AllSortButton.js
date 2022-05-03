import * as React from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";

export default function Top10SortButton({ cocktails, setCocktails }) {
  // state
  const [order, setOrder] = React.useState("");
  const isAsc = true;

  // 정렬기준 함수
  const sortCocktails = (isAsc) => {
    if (isAsc) {
      setOrder("이름 오름차순");
      cocktails.sort((A, B) => {
        return A.name < B.name ? -1 : A.name > B.name ? 1 : 0;
      });
      setCocktails([...cocktails]);
    } else {
      setOrder("이름 내림차순");
      cocktails.sort((A, B) => {
        return A.name < B.name ? 1 : A.name > B.name ? -1 : 0;
      });
      setCocktails([...cocktails]);
    }
  };

  return (
    <Box
      sx={{
        height: 50,
        width: 200,
        bgcolor: "rgba(64, 64, 64, 0.7)",
      }}
    >
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
              sortCocktails(isAsc);
            }}
          >
            이름 오름차순
          </MenuItem>
          <MenuItem
            value={"이름 내림차순"}
            onClick={() => {
              sortCocktails(!isAsc);
            }}
          >
            이름 내림차순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
