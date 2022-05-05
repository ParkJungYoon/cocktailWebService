import * as React from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";

export default function LikeSortButton({ cocktails, setCocktails }) {
  // state
  const [order, setOrder] = React.useState("");

  // 정렬기준 함수
  const sortCocktails = (isAsc) => {
    if (isAsc) {
      setOrder("이름 오름차순");
      cocktails.sort((a, b) => {
        const A = a.name.toString().toLowerCase();
        const B = b.name.toString().toLowerCase();
        return A < B ? -1 : A > B ? 1 : 0;
      });
      setCocktails([...cocktails]);
    } else if (!isAsc) {
      setOrder("이름 내림차순");
      cocktails.sort((a, b) => {
        const A = a.name.toString().toLowerCase();
        const B = b.name.toString().toLowerCase();
        return A < B ? 1 : A > B ? -1 : 0;
      });
      setCocktails([...cocktails]);
    }
  };

  return (
    <Box
      sx={{
        height: 50,
        width: 150,
        bgcolor: "rgba(64, 64, 64, 0.4)",
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
              sortCocktails(true);
            }}
          >
            이름 오름차순
          </MenuItem>
          <MenuItem
            value={"이름 내림차순"}
            onClick={() => {
              sortCocktails(false);
            }}
          >
            이름 내림차순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
