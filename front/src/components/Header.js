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
  Button,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./user/LoginForm";

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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#F1F7ED" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 0 }} />
          <Link
            variant="h6"
            underline="none"
            color="black"
            sx={{ fontSize: 24 }}
            onClick={() => navigate("/")}
          >
            {"JACKPOT"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              onClick={() => navigate("/")}
              className="logo"
            >
              {"Introduce"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              sx={{ ...rightLink }}
              onClick={() => navigate("/recommend")}
            >
              {"Recommend"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              sx={{ ...rightLink }}
              onClick={() => navigate("/myPage")}
            >
              {"My Page"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              sx={{ ...rightLink }}
              onClick={handleOpen}
            >
              {"Login"}
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
