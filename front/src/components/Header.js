import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserStateContext, DispatchContext } from "../App";
import {
  Box,
  Link,
  AppBar,
  Toolbar,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./user/LoginForm";
import "../scss/Header.scss";
import logo from "../img/logo.png";
const rightLink = {
  fontSize: 15,
  color: "black",
  mx: 2,
};
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function Header() {
  const navigate = useNavigate();

  // 상태관리
  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };
  // modal 관리
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ flex: 0 }} />
            <Link
              underline="none"
              onClick={() => navigate("/")}
              className="logo"
            >
              <p>저쪽 손님께서 보내신 겁니다</p>
            </Link>
            <Box
              sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
              className="navbar"
            >
              <Link
                className="navbarIntro"
                underline="none"
                sx={rightLink}
                onClick={() => navigate("/introduce")}
              >
                {"프롤로그"}
              </Link>
              <Link
                className="navbarRecommend"
                underline="none"
                sx={{ ...rightLink }}
                onClick={() => navigate("/recommend")}
              >
                {"칵테일 한 잔"}
              </Link>
              <Link
                className="navbarMypage"
                underline="none"
                sx={{ ...rightLink }}
                onClick={() => navigate("/myPage")}
              >
                {"나의 페이지"}
              </Link>
              <Link
                className="navbarLogin"
                underline="none"
                sx={{ ...rightLink }}
                onClick={handleOpen}
              >
                {"로그인"}
              </Link>

              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>로그인</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                  <LoginForm />
                </DialogContent>
                {/* <DialogActions>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              닫기
            </Button>
          </DialogActions> */}
              </Dialog>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </ThemeProvider>
    </>
  );
}

export default Header;
