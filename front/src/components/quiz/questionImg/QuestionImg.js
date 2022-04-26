import React from "react";
// import './Question.css';
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

const QuestionImg = (props) => {
  return (
    <>
      <div
        style={{
          height: "150px",
          marginBottom: "3%",
        }}
      >
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardMedia
            component="img"
            image={props.img}
            alt="image"
            sx={{ width: "100%", height: "100%" }}
          />
        </Card>
      </div>
    </>
  );
};

export default QuestionImg;
