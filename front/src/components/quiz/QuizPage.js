import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import quizHeaderImg from "./quizHeaderImg.jpg";
import QuizMain from "./quizMain/QuizMain";
import bgImg from "./bgImg.jpg";

function Quiz() {
  const quizGridStyle = {
    padding: "2%",
    border: "3px solid gray",
    borderRadius: "1rem",
    marginBottom: "3%",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImg})`,
    backgroundSize: "cover",
  };

  return (
    <Container>
      <Box>
        <CardContent>
          <Grid
            container
            justifyContent="center"
            sx={{
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              mt={3}
              mb={3}
              height="700px"
              sx={quizGridStyle}
            >
              <QuizMain></QuizMain>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Container>
  );
}

export default Quiz;
