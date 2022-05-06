import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import WordCloud from "../test/WordCloud";

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        pt: "12%",
      }}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h5" sx={{ color: "#25E75C" }}>
          좋아요를 많이 받은 칵테일일수록 글자가 크게 보입니다.
        </Typography>
      </Grid>
      <Grid item sx={{ my: 3 }}>
        <WordCloud />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          align="center"
          variant="h5"
          sx={{
            color: "#25E75C",
            "&:hover": { border: "1px solid #25E75C" },
          }}
          onClick={() => navigate("/cocktailBar")}
        >
          칵테일 바 가기
        </Button>
      </Grid>
    </Grid>
  );
}
