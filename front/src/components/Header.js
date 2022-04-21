import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserStateContext, DispatchContext } from "../App";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 0 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
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
              sx={rightLink}
              onClick={() => navigate("/prolog")}
            >
              {"Prolog"}
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
              onClick={() => navigate("/login")}
            >
              {"Login"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
}

export default Header;
