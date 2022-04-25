import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Bookmark from "./Bookmark";
import UserTab from "./UserTab";
import defaultImage from "../../img/userDefaultImg.jpg";

function Mypage() {
  const aBoxStyle = {
    width: 300,
    height: 300,
    border: "2px solid gray",
    borderRadius: "1rem",
    // backgroundColor: "info.dark",
    // "&:hover": {
    //   backgroundColor: "info.main",
    //   opacity: [0.9, 0.8, 0.7],
    // },
  };
  return (
    <>
      <Container>
        <Box>
          <h2>나의 페이지</h2>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={aBoxStyle}>
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
                    width: "80%",
                    height: "80%",
                    // borderRadius: "10rem",
                  }}
                  src={defaultImage}
                  alt="defaultImage"
                />
              </div>
            </Box>
            <Box sx={aBoxStyle}>
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
                  <p>이메일 : 777@jackpot.com</p>
                  <p>이름 : Jackpot</p>
                  <p>닉네임 : 모히또</p>
                  <p>북마크 : @@개</p>
                  <p>좋아요 : @@개</p>
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
                backgroundColor: "lightGray",
                height: "100%",
                border: "2px solid dark-gray",
                borderRadius: "1rem",
              }}
            >
              <UserTab></UserTab>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Mypage;
