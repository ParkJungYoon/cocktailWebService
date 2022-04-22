import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

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
                  <p>아이디 : 123123123</p>
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
              width: 852,
              height: 600,
            }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                height: "100%",
              }}
            >
              북마크
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Mypage;
