import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Tab, Tabs, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import RegisterModal from "./user/RegisterModal";
import LoginModal from "./user/LoginModal";
import { UserContext } from "./user/reducer/userReducer";
import "../scss/Header.scss";

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

function Header({ user }) {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);
  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    userDispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };
  // modal 관리
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = React.useState(false);
  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);

  //style
  const linkTabstyle = { width: "130px" };

  // 탭 관리
  const [value, setValue] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // user nav
  const handleUserNav = () => {};

  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <div className="navbarAccount">
          {isLogin ? (
            <>
              <Link className="navbarButton" onClick={handleUserNav}>
                {userState.user.name}
              </Link>
              <span>/</span>
              <Link onClick={logout} className="account">
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link onClick={handleLoginOpen} className="account">
                Log In
              </Link>
              <span>/</span>
              <Link onClick={handleRegisterOpen} className="account">
                Sign Up
              </Link>
            </>
          )}
        </div>
        <LoginModal handleLoginClose={handleLoginClose} open={openLogin} />
        <RegisterModal
          handleRegisterClose={handleRegisterClose}
          open={openRegister}
        />
        <div className="navbarLogo">
          <Link
            color="white"
            underline="none"
            onClick={() => {
              navigate("/");
              setValue(false);
            }}
          >
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
              sx={linkTabstyle}
              className="navbarButton"
              label="Cocktail Bar"
              value="1"
              onClick={() => {
                navigate("/cocktailBar");
              }}
            />
            <LinkTab
              sx={linkTabstyle}
              className="navbarButton"
              label="Cocktail Test"
              value="2"
              onClick={() => {
                navigate("/cocktailTest");
              }}
            />
            <LinkTab
              sx={linkTabstyle}
              className="navbarButton"
              label="Lounge"
              value="3"
              onClick={() => {
                navigate("/lounge");
              }}
            />
            <LinkTab
              sx={linkTabstyle}
              className="navbarButton"
              label="Introduction"
              value="4"
              onClick={() => {
                navigate("/introduction");
              }}
            />
          </Tabs>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Header;
