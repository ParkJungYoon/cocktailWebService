import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Top10SortButton({ cocktails, setCocktails }) {
  const [order, setOrder] = React.useState("");
  const isAsc = true;

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
        minWidth: 150,
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
