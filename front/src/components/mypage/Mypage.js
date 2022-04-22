import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Bookmark from "./Bookmark";

function Mypage() {
  return (
    <>
      <Container>
        <Box>
          <h2>나의 페이지</h2>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  style={{
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "10rem",
                  }}
                  src="http://placekitten.com/200/200"
                  alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
                />
              </div>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "info.dark",
                "&:hover": {
                  backgroundColor: "info.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <div>
                  <p>아이디 : 123@123123.com</p>
                  <p>닉네임 : 123213</p>
                </div>
                <div>
                  <button>수정</button>
                </div>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              //   ml: 10,
              width: "100%",
              height: 600,
            }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                height: "50%",
              }}
            >
              북마크
              <div
                style={{
                  margin: "3%",
                }}
              >
                <Bookmark></Bookmark>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "gray",
                height: "50%",
              }}
            >
              좋아요
              <div
                style={{
                  margin: "3%",
                }}
              >
                <Bookmark></Bookmark>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Mypage;
