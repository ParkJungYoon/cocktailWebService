import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import WordCloud from "../test/WordCloud";

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <div className="thirdpageContainer">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <WordCloud sx={{ marginTop: "60" }} />
        <Box className="buttonBox"></Box>
      </Grid>
    </div>
  );
}
