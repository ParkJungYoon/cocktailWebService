import { Grid, Card, CardHeader, CardContent, CardMedia } from "@mui/material";
import quizHeaderImg from "./quizHeaderImg.jpg";
import QuizMain from "./quizMain/QuizMain";

function Quiz() {
  const quizGridStyle = {
    padding: "2%",
    border: "3px solid gray",
    borderRadius: "1rem",
    marginBottom: "3%",
  };

  return (
    <>
      <Card sx={{ maxWidth: 550, minHeight: 700 }}>
        <CardContent>
          <Grid
            container
            justifyContent="center"
            sx={{
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            <Grid sx={{ height: "150px" }}>
              <CardMedia
                component="img"
                image={quizHeaderImg}
                alt="image"
                sx={{ width: "100%", height: "100%", borderRadius: "1rem" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              mt={3}
              mb={3}
              height="500px"
              sx={quizGridStyle}
            >
              <QuizMain></QuizMain>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Quiz;
