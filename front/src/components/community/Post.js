import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  TextField,
  Button,
} from "@mui/material";

function FullWidthTextField() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        multiline
        rows={20}
        placeholder="글을 작성해주세요.."
        id="fullWidth"
      />
    </Box>
  );
}

export default function Postings() {
  return (
    <Card sx={{ mx: 20, p: 5 }}>
      <CardHeader title="글쓰기" />
      <CardContent>
        <FullWidthTextField />
        <Box textAlign="right">
          <Button sx={{ color: "black" }}>작성하기</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
