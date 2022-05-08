import * as React from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import { useSnackbar } from "notistack";
import useUserHook from "../commons/useUserHook";

export default function AllSortButton({ setSort, setPage, setCocktails }) {
  // state
  const [order, setOrder] = React.useState("");
  const userState = useUserHook();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
              // {
              //   !userState.user && enqueueSnackbar("Login required");
              // }
              setCocktails([]);
              setPage(1);
              setSort("nameAsc");
              setOrder("이름 오름차순");
            }}
          >
            이름 오름차순
          </MenuItem>
          <MenuItem
            value={"이름 내림차순"}
            onClick={() => {
              // {
              //   !userState.user && enqueueSnackbar("Login required");
              // }
              setCocktails([]);
              setPage(1);
              setSort("nameDesc");
              setOrder("이름 내림차순");
            }}
          >
            이름 내림차순
          </MenuItem>
          <MenuItem
            value={"좋아요순"}
            onClick={() => {
              // {
              //   !userState.user && enqueueSnackbar("Login required");
              // }
              setCocktails([]);
              setPage(1);
              setSort("likeDesc");
              setOrder("좋아요순");
            }}
          >
            좋아요순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
