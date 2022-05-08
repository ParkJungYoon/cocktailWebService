import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Link,
  Tab,
  Tabs,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import logo from "../imgs/logo2.jpg";
import RegisterModal from "./user/RegisterModal";
import LoginModal from "./user/LoginModal";
import { UserContext } from "./user/reducer/userReducer";
import "../scss/Header.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0,0,0,0)",
    },
  },
});
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 80,
    width: "100%",
    height: "8px",
    backgroundColor: "#fff",
    boxShadow:
      "0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
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
    window.location.reload();
  };
  // modal 관리
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = React.useState(false);
  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);

  //style
  const linkTabstyle = { minWidth: "100px", width: "12vw", maxWidth: "200px" };
  const paperPropsStyle = {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  };
  // 탭 관리
  const [value, setValue] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // user nav
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <div className="navbarAccount">
          {isLogin ? (
            <>
              <Link className="navbarButton">
                {userState.user.name}
                <IconButton
                  onClick={(e) => {
                    anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
                  }}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={isMenuOpen ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={isMenuOpen ? "true" : undefined}
                >
                  <ArrowDropDownIcon
                    sx={{ width: 32, height: 32, color: "rgb(125,125,125)" }}
                  />
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={isMenuOpen}
                    // onClose={handleClose}
                    // onClick={handleClose}
                    PaperProps={paperPropsStyle}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      onClick={() => {
                        navigate("/account");
                      }}
                    >
                      Account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                </IconButton>
              </Link>

              {/* <span>/</span>
              <Link onClick={logout} className="account">
                Log Out
              </Link> */}
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
            <Box
              component="img"
              src={logo}
              alt="logo"
              width={"120px"}
              sx={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        <Box sx={{ width: "100%" }} className="navbarMenu">
          <StyledTabs
            value={value}
            onChange={handleChange}
            centered
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
          </StyledTabs>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Header;
