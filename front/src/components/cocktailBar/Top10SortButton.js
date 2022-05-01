import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Top10SortButton({ top10Cocktails, setTop10Cocktails }) {
  const [order, setOrder] = React.useState("");

  const handleOnClickAscCocktails = () => {
    setOrder("이름 오름차순");
    const ascCocktails = [...top10Cocktails];
    ascCocktails.sort((A, B) => {
      return A.name < B.name ? -1 : A.name > B.name ? 1 : 0;
    });
    setTop10Cocktails([...ascCocktails]);
  };

  const handleOnClickDescCocktails = () => {
    setOrder("이름 내림차순");
    const descCocktails = [...top10Cocktails];
    descCocktails.sort((A, B) => {
      return A.name < B.name ? 1 : A.name > B.name ? -1 : 0;
    });
    setTop10Cocktails([...descCocktails]);
  };

  const handleOnClickAscRank = () => {
    setOrder("순위 오름차순");
    const ascCocktails = [...top10Cocktails];
    ascCocktails.sort((A, B) => {
      return A.rank.rank < B.rank.rank ? -1 : A.rank.rank > B.rank.rank ? 1 : 0;
    });
    setTop10Cocktails([...ascCocktails]);
  };
  const handleOnClickDescRank = () => {
    setOrder("순위 내림차순");
    const descCocktails = [...top10Cocktails];
    descCocktails.sort((A, B) => {
      return A.rank.rank < B.rank.rank ? 1 : A.rank.rank > B.rank.rank ? -1 : 0;
    });
    setTop10Cocktails([...descCocktails]);
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
          <MenuItem value="">
            <em>정렬기준</em>
          </MenuItem>
          <MenuItem value={10} onClick={handleOnClickAscCocktails}>
            이름 오름차순
          </MenuItem>
          <MenuItem value={20} onClick={handleOnClickDescCocktails}>
            이름 내림차순
          </MenuItem>
          <MenuItem value={30} onClick={handleOnClickAscRank}>
            순위 오름차순
          </MenuItem>
          <MenuItem value={40} onClick={handleOnClickDescRank}>
            순위 내림차순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
