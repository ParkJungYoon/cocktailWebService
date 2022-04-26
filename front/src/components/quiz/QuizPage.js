import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import QuizMain from "./quizMain/QuizMain";
import bgImg from "./bgImg.jpg";

function Quiz() {
  const quizGridStyle = {
    padding: "5% 15% 5% 15%",
    borderRadius: "2rem",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${bgImg})`,
    backgroundSize: "cover",
  };

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <CardContent>
        <Grid
          container
          justifyContent="center"
          sx={{
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={12} mt={13} height="720px" sx={quizGridStyle}>
            <QuizMain></QuizMain>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}

export default Quiz;
