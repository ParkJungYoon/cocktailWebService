import { memo } from "react";
import { Container } from "@mui/material";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading type="spin" color="#A593E0" />
    </Container>
  );
}

export default memo(Loader);
