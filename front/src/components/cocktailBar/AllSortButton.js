import * as React from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";

export default function AllSortButton({ cocktails, setCocktails }) {
  // state
  const [order, setOrder] = React.useState("");

  // 정렬기준 함수
  const sortCocktails = (isAsc, key) => {
    if (isAsc && key === "name") {
      setOrder("이름 오름차순");
      cocktails.sort((A, B) => {
        return A.name < B.name ? -1 : A.name > B.name ? 1 : 0;
      });
      setCocktails([...cocktails]);
    } else if (!isAsc && key === "name") {
      setOrder("이름 내림차순");
      cocktails.sort((A, B) => {
        return A.name < B.name ? 1 : A.name > B.name ? -1 : 0;
      });
      setCocktails([...cocktails]);
    } else if (!isAsc && key === "like") {
      setOrder("좋아요순");
      cocktails.sort((A, B) => {
        return A.likes < B.likes ? -1 : A.likes > B.likes ? 1 : 0;
      });
      setCocktails([...cocktails]);
    }
  };

  return (
    <Box
      sx={{
        height: 50,
        width: 150,
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
            value={"좋아요순"}
            onClick={() => {
              sortCocktails(false, "like");
            }}
          >
            좋아요순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
