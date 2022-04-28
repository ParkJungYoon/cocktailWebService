import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Bookmark from "./Bookmark";
import defaultImage from "../../imgs/userDefaultImg.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
} from "@mui/material";

function UserInfo() {
  const aGridStyle = {
    padding: "3%",
  };
  return (
    <Card sx={{ maxWidth: 550, minHeight: 400 }}>
      {/* <CardMedia
        component="img"
        image={defaultImage}
        alt="image"
        sx={{ width: "100%", height: "100%" }}
      /> */}
      <CardContent>
        <Grid
          container
          justifyContent="center"
          sx={{
            fontSize: "15px",
            textAlign: "center",
            height: "95px",
          }}
        >
          <Grid item xs={4} md={4} sx={aGridStyle}>
            이메일
          </Grid>{" "}
          <Grid item xs={8} md={8} sx={aGridStyle}>
            777@jackpot.com
          </Grid>
          <Grid item xs={4} md={4} sx={aGridStyle}>
            이름
          </Grid>
          <Grid item xs={8} md={8} sx={aGridStyle}>
            Jackpot
          </Grid>
          <Grid item xs={4} md={4} sx={aGridStyle}>
            닉네임
          </Grid>
          <Grid item xs={8} md={8} sx={aGridStyle}>
            모히또
          </Grid>
          <Grid item xs={12} md={12} mt={5}>
            <button>수정</button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserInfo;
