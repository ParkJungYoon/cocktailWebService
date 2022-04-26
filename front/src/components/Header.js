import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Grid, Tab, Tabs, Box } from "@mui/material";

import { UserStateContext, DispatchContext } from "../App";
import "../scss/Header.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

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

  // 탭 관리
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <nav className="navbar">
        <div className="navbarAccount">
          <Link onClick={() => navigate("/introduce")} className="account">
            Log In
          </Link>
          <span>/</span>
          <Link className="account">Sign Up</Link>
          {isLogin && <Link className="navbarButton">NickName</Link>}
        </div>
        <div className="navbarLogo">
          <Link color="white" underline="none" onClick={() => navigate("/")}>
            저쪽 손님께서
            <br />
            보내신 겁니다
          </Link>
        </div>

        <Box sx={{ width: "100%", typography: "body1" }} className="navbarMenu">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="primary"
            textColor="inherit"
          >
            <LinkTab
              className="navbarButton"
              label="Introduce"
              value="1"
              onClick={() => {
                navigate("/introduce");
              }}
            />
            <LinkTab
              className="navbarButton"
              label="Dictionary"
              value="2"
              onClick={() => {
                navigate("/dictionary");
              }}
            />
            <LinkTab
              className="navbarButton"
              label="CLineTest"
              value="3"
              onClick={() => {
                navigate("/clinetest");
              }}
            />
            <LinkTab
              className="navbarButton"
              label="Community"
              value="4"
              onClick={() => {
                navigate("/community");
              }}
            />
          </Tabs>
        </Box>
      </nav>
    </ThemeProvider>
  );
}

export default Header;
