import React from "react";
import { Button, Grid, Container, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import mbitResultSetPage from "../../imgs/mbitResultSetPage.jpg";

const TypeCheck = ({ countEI, countSN, countTF, countJP }) => {
  const navigate = useNavigate();
  const mbtiCheck = () => {
    return {
      countEI: countEI > 2 ? "E" : "I",
      countSN: countSN > 2 ? "S" : "N",
      countTF: countTF > 2 ? "T" : "F",
      countJP: countJP > 2 ? "J" : "P",
    };
  };
  const onClickButton = () => {
    const data = mbtiCheck();
    const mbti = `${data.countEI}${data.countSN}${data.countTF}${data.countJP}`;
    return mbti;
  };

  const mbitResultSetPageImg = {
    backgroundImage: `url(${mbitResultSetPage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // mt: 3,
    height: "100%",
  };

  return (
    <>
      <Grid container sx={mbitResultSetPageImg}>
        <Container
          sx={{
            bgcolor: "rgba(0,0,0,0.6)",
            width: "80%",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            // pt={50}
            sx={{ paddingTop: "40vh", textAlign: "center" }}
          >
            {/* <Box pt={4} pb={4} sx={{}}> */}
            <Link
              onClick={() => navigate(`/cocktailTest/mbti/${onClickButton()}`)}
              sx={{ textDecoration: "none" }}
            >
              <Button
                sx={{
                  margin: "auto",
                  height: "15vh",
                  width: "25vw",
                  border: "3px solid white",
                  color: "white",
                  fontSize: "1.5vw",
                  "&:hover": { boxShadow: "0 0 15px rgb(10, 20, 30)" },
                }}
              >
                테스트 결과 확인
              </Button>
            </Link>
            {/* </Box> */}
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default TypeCheck;
