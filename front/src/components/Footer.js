import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { textAlign } from "@mui/system";

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{
        bgcolor: "white",
        position: "absolute",
        width: "100vw",
        bottom: "6%",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs>
            <Grid container sx={{ height: "15vh" }}></Grid>
          </Grid>
          <Grid item>
            <Box>
              {"This project made by "}
              <Link
                href="https://kdt-gitlab.elice.io/ai_track/class_04/data_project/team7/data-project-7"
                rel="sponsored"
              >
                Team 7
              </Link>
              {" from "}
              <Link
                href="https://kdt-gitlab.elice.io/ai_track/class_04/data_project/team7/data-project-7"
                rel="sponsored"
              >
                www.data-project-7.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elice AI 4 BY Team 7
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
