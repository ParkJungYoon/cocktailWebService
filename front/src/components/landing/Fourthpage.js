import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import WordCloud from "../test/WordCloud";

export default function Fourthpage() {
  const navigate = useNavigate();
  return (
    <div className="fourthpageContainer">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <WordCloud sx={{ marginTop: "60" }} />
      </Grid>
    </div>
  );
}
