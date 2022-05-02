import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Top10SortButton({ cocktails, setCocktails }) {
  const [order, setOrder] = React.useState("");

  const handleOnClickAscCocktails = () => {
    setOrder("이름 오름차순");
    const ascCocktails = [...cocktails];
    ascCocktails.sort((A, B) => {
      return A.name < B.name ? -1 : A.name > B.name ? 1 : 0;
    });
    setCocktails([...ascCocktails]);
  };

  const handleOnClickDescCocktails = () => {
    setOrder("이름 내림차순");
    const descCocktails = [...cocktails];
    descCocktails.sort((A, B) => {
      return A.name < B.name ? 1 : A.name > B.name ? -1 : 0;
    });
    setCocktails([...descCocktails]);
  };

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, bgcolor: "rgba(64, 64, 64, 0.7)" }}>
      <FormControl fullWidth>
        <Select
          value={order}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ color: "white" }}
        >
          <MenuItem value="">정렬기준</MenuItem>
          <MenuItem value={10} onClick={handleOnClickAscCocktails}>
            이름 오름차순
          </MenuItem>
          <MenuItem value={20} onClick={handleOnClickDescCocktails}>
            이름 내림차순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
