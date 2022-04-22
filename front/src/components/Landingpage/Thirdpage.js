import * as React from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import cocktails from "../../img/cocktails.png";

export default function Thirdpage() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={cocktails} alt="" width={"85%"} />

      <Button
        size="small"
        variant="contained"
        onClick={() => {
          navigate("/Recommend");
        }}
        color="warning"
        sx={{ mt: 10 }}
      >
        나만의 칵테일 찾으러 가기
      </Button>
    </Container>
  );
}
